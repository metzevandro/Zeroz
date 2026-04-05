import React, { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import Notification from "../Notification";
import { NotificationContainerProps } from "../Notification.types";

const EXIT_DURATION = 400;

interface ItemState {
  id: string;
  isVisible: boolean;
  isExiting: boolean;
}

/**
 * `NotificationContainer` renders a fixed portal that stacks float
 * notifications in a column, managing their enter/exit/reorder animations.
 *
 * - **New entries** slide in from below
 * - **Dismissed entries** scale down + fade, then remaining items collapse smoothly
 * - **Order** reflects the `notifications` array order
 */
export function NotificationContainer({
  notifications,
}: NotificationContainerProps) {
  const [itemStates, setItemStates] = useState<ItemState[]>([]);
  const notificationsRef = useRef(notifications);
  notificationsRef.current = notifications;

  useEffect(() => {
    setItemStates((prev) => {
      const existingIds = new Set(prev.map((s) => s.id));
      const incomingIds = new Set(notifications.map((n) => n.id));

      const next = prev.filter((s) => incomingIds.has(s.id) || s.isExiting);
      for (const n of notifications) {
        if (!existingIds.has(n.id)) {
          next.push({ id: n.id, isVisible: false, isExiting: false });
        }
      }
      return next;
    });
  }, [notifications]);

  useEffect(() => {
    const pending = itemStates.filter((s) => !s.isVisible && !s.isExiting);
    if (pending.length === 0) return;
    const timer = setTimeout(() => {
      setItemStates((prev) =>
        prev.map((s) =>
          pending.some((p) => p.id === s.id) ? { ...s, isVisible: true } : s,
        ),
      );
    }, 16);
    return () => clearTimeout(timer);
  }, [itemStates]);

  const handleDismiss = useCallback((id: string) => {
    setItemStates((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, isExiting: true, isVisible: false } : s,
      ),
    );

    setTimeout(() => {
      setItemStates((prev) => prev.filter((s) => s.id !== id));
      notificationsRef.current.find((n) => n.id === id)?.onClose?.();
    }, EXIT_DURATION);
  }, []);

  return createPortal(
    <div className="notification-container">
      {itemStates.map(({ id, isVisible, isExiting }) => {
        const entry = notificationsRef.current.find((n) => n.id === id);
        if (!entry) return null;

        return (
          <Notification
            key={id}
            type="float"
            isOpen={isVisible}
            isExiting={isExiting}
            variant={entry.variant}
            title={entry.title}
            description={entry.description}
            icon={entry.icon}
            dismissible={entry.dismissible}
            withAction={entry.withAction}
            buttonLabel={entry.buttonLabel}
            disableButton={entry.disableButton}
            onClickButton={entry.onClickButton}
            onClose={() => handleDismiss(id)}
          />
        );
      })}
    </div>,
    document.body,
  );
}

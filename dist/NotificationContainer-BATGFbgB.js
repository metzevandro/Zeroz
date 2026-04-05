'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactDom = require('react-dom');
var ButtonIcon = require('./ButtonIcon-D_zBPQVl.js');
var Icon = require('./Icon-BUoiqqF-.js');
var Button = require('./Button-CzlgwZOQ.js');

/**
 * Builds the CSS class string for the notification root element.
 * The `open` class is always included when the component is rendered
 * (since `isOpen` guards the render itself) — it's needed to trigger
 * the float animation on `.float.open`.
 */
function getNotificationClass(variant, type, dismissible, isExiting) {
    return [
        "notification",
        variant,
        type,
        "open",
        dismissible && "dismissible",
        isExiting && "exiting",
    ]
        .filter(Boolean)
        .join(" ");
}

/**
 * `Notification` displays a contextual message with an optional action button
 * and a dismissible close button.
 *
 * It supports two display modes (`"float"` for toast-style overlays and
 * `"inline"` for in-flow banners) and four semantic variants.
 *
 * The component renders nothing when `isOpen` is `false`.
 *
 * @example
 * ```tsx
 * // Inline success notification
 * <Notification
 *   isOpen={saved}
 *   type="inline"
 *   variant="success"
 *   icon="check_circle"
 *   title="Changes saved"
 *   description="Your profile has been updated."
 *   dismissible
 *   onClose={() => setSaved(false)}
 * />
 *
 * // Float warning with action
 * <Notification
 *   isOpen={showWarning}
 *   type="float"
 *   variant="warning"
 *   icon="warning"
 *   title="Session expiring"
 *   withAction
 *   buttonLabel="Stay signed in"
 *   onClickButton={renewSession}
 *   dismissible
 *   onClose={dismissWarning}
 * />
 * ```
 */
const Notification = ({ icon, title, description, variant, type, isOpen = false, isExiting = false, dismissible = false, withAction = false, disableButton = false, buttonLabel, onClickButton, onClose, }) => {
    if (type === "inline" && !isOpen)
        return null;
    if (type === "float" && !isOpen && !isExiting) {
        return (jsxRuntime.jsx("div", { "aria-hidden": true, className: "notification float notification-hidden" }));
    }
    const hasContent = withAction || Boolean(description);
    return (jsxRuntime.jsxs("div", { className: getNotificationClass(variant, type, dismissible, isExiting), children: [jsxRuntime.jsxs("div", { className: `notification-title ${variant}`, children: [jsxRuntime.jsx(Icon.Icon, { icon: icon, size: "md" }), jsxRuntime.jsx("div", { className: "title", children: title }), dismissible && (jsxRuntime.jsx(ButtonIcon.ButtonIcon, { variant: "on-color", size: "sm", icon: "close", appearance: "plain", onClick: onClose }))] }), hasContent && (jsxRuntime.jsxs("div", { className: "notification-content", children: [description && jsxRuntime.jsx("div", { className: "description", children: description }), withAction && (jsxRuntime.jsx("div", { className: "notification-with-action", children: jsxRuntime.jsx(Button.Button, { size: "md", variant: variant, disabled: disableButton, onClick: onClickButton, children: buttonLabel }) }))] }))] }));
};

const EXIT_DURATION = 400;
/**
 * `NotificationContainer` renders a fixed portal that stacks float
 * notifications in a column, managing their enter/exit/reorder animations.
 *
 * - **New entries** slide in from below
 * - **Dismissed entries** scale down + fade, then remaining items collapse smoothly
 * - **Order** reflects the `notifications` array order
 */
function NotificationContainer({ notifications, }) {
    const [itemStates, setItemStates] = React.useState([]);
    const notificationsRef = React.useRef(notifications);
    notificationsRef.current = notifications;
    React.useEffect(() => {
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
    React.useEffect(() => {
        const pending = itemStates.filter((s) => !s.isVisible && !s.isExiting);
        if (pending.length === 0)
            return;
        const timer = setTimeout(() => {
            setItemStates((prev) => prev.map((s) => pending.some((p) => p.id === s.id) ? { ...s, isVisible: true } : s));
        }, 16);
        return () => clearTimeout(timer);
    }, [itemStates]);
    const handleDismiss = React.useCallback((id) => {
        setItemStates((prev) => prev.map((s) => s.id === id ? { ...s, isExiting: true, isVisible: false } : s));
        setTimeout(() => {
            setItemStates((prev) => prev.filter((s) => s.id !== id));
            notificationsRef.current.find((n) => n.id === id)?.onClose?.();
        }, EXIT_DURATION);
    }, []);
    return reactDom.createPortal(jsxRuntime.jsx("div", { className: "notification-container", children: itemStates.map(({ id, isVisible, isExiting }) => {
            const entry = notificationsRef.current.find((n) => n.id === id);
            if (!entry)
                return null;
            return (jsxRuntime.jsx(Notification, { type: "float", isOpen: isVisible, isExiting: isExiting, variant: entry.variant, title: entry.title, description: entry.description, icon: entry.icon, dismissible: entry.dismissible, withAction: entry.withAction, buttonLabel: entry.buttonLabel, disableButton: entry.disableButton, onClickButton: entry.onClickButton, onClose: () => handleDismiss(id) }, id));
        }) }), document.body);
}

exports.Notification = Notification;
exports.NotificationContainer = NotificationContainer;

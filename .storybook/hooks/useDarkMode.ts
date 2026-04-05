import { useState, useEffect } from "react";
import { addons } from "storybook/preview-api";
import { DARK_MODE_EVENT_NAME } from "@vueless/storybook-dark-mode";

const channel = addons.getChannel();

function getInitialDarkMode(): boolean {
  const stored = localStorage.getItem("sb-dark-mode");
  if (stored !== null) {
    return stored === "true";
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function useIsDarkMode(): boolean {
  const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode());

  useEffect(() => {
    const handleDarkModeChange = (isDark: boolean) => {
      setIsDarkMode(isDark);
      localStorage.setItem("sb-dark-mode", isDark.toString());
    };

    channel.on(DARK_MODE_EVENT_NAME, handleDarkModeChange);
    return () => channel.off(DARK_MODE_EVENT_NAME, handleDarkModeChange);
  }, []);

  return isDarkMode;
}

export function useOnDarkModeChange(callback: (isDark: boolean) => void): void {
  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, callback);
    return () => channel.off(DARK_MODE_EVENT_NAME, callback);
  }, [callback]);
}

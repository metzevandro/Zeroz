/**
 * Returns a debounced version of `fn` that delays invocation
 * until `delay` milliseconds have passed since the last call.
 *
 * Used internally to throttle `onDebouncedChange` so API calls
 * are not made on every keystroke.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any[]) => void>(
  fn: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

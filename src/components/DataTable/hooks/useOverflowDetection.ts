import { useRef, useState, useEffect } from "react";

/**
 * Detecta se o elemento referenciado tem conteúdo
 * horizontalmente maior que sua largura visível.
 * Usa `ResizeObserver` para reavaliação automática ao redimensionar.
 */
export function useOverflowDetection() {
  const ref = useRef<HTMLDivElement>(null);
  const [isOverflowed, setIsOverflowed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const check = () => {
      setIsOverflowed(element.scrollWidth > element.clientWidth);
    };

    const observer = new ResizeObserver(check);
    observer.observe(element);
    check();

    return () => observer.unobserve(element);
  }, []);

  return { ref, isOverflowed };
}

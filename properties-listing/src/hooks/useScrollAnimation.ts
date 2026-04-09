import { useEffect, useRef, useState, type RefObject } from 'react';

export interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation<T extends HTMLElement>(
  options: UseScrollAnimationOptions = {}
): { ref: RefObject<T | null>; isVisible: boolean } {
  const { threshold = 0.12, rootMargin = '0px 0px -40px 0px', triggerOnce = true } =
    options;
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => {
    const element: T | null = ref.current;
    if (!element) {
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const entry: IntersectionObserverEntry | undefined = entries[0];
        if (!entry) {
          return;
        }
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);
  return { ref, isVisible };
}

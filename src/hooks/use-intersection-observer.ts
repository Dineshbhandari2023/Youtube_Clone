import { useState, useRef, useEffect } from "react";

export const useIntersectionObserver = (options?: IntersectionObserverInit) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entries]) => {
      setIsIntersecting(entries.isIntersecting);
    }, options);
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [options]);

  return {
    targetRef,
    isIntersecting,
  };
};

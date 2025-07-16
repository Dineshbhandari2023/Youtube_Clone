import { useState, useRef, useEffect } from "react";

export const useIntersectionObserver = (options?: IntersectionObserverInit) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const taargetRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState(null);
};

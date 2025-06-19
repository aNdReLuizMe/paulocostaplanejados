import { useState, useEffect, useRef } from 'react';

interface UseLazyImageProps {
  src: string;
  threshold?: number;
  rootMargin?: string;
}

export function useLazyImage({ src, threshold = 0.1, rootMargin = '50px' }: UseLazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  useEffect(() => {
    if (isInView && !isLoaded) {
      const img = new Image();
      img.onload = () => setIsLoaded(true);
      img.src = src;
    }
  }, [isInView, isLoaded, src]);

  return {
    ref: imgRef,
    src: isLoaded ? src : undefined,
    isLoaded,
    isInView,
  };
} 
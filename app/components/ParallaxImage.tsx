'use client';

import { useEffect, useRef, useState } from 'react';

type ParallaxImageProps = {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
};

export default function ParallaxImage({
  src,
  alt,
  speed = 0.5,
  className = ''
}: ParallaxImageProps) {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrolled = window.scrollY;
        const elementTop = rect.top + scrolled;
        const windowHeight = window.innerHeight;

        // Only apply parallax when element is in view
        if (scrolled + windowHeight > elementTop && scrolled < elementTop + rect.height) {
          const yPos = (scrolled - elementTop) * speed;
          setOffset(yPos);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={`w-full h-full overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{
          transform: `translateY(${offset}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      />
    </div>
  );
}

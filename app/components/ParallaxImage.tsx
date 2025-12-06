'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type ParallaxImageProps = {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
  priority?: boolean;
};

export default function ParallaxImage({
  src,
  alt,
  speed = 0.5,
  className = '',
  priority = false
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
    <div ref={ref} className={`relative w-full overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `translateY(${offset}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}

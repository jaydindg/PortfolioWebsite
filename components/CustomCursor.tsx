'use client';
import { useEffect, useRef } from 'react';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorTrailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorTrail = cursorTrailRef.current;

    if (!cursor || !cursorTrail) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      // Update main cursor
      requestAnimationFrame(() => {
        cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;

        // Update trail with slight delay
        setTimeout(() => {
          cursorTrail.style.transform = `translate(${clientX}px, ${clientY}px) scale(2)`;
        }, 50);
      });
    };

    // Add event listener
    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className={styles.cursor} />
      <div ref={cursorTrailRef} className={styles.cursorTrail} />
    </>
  );
}

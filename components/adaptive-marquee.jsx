"use client";

import { useLayoutEffect, useRef, useState } from "react";

export default function AdaptiveMarquee({ items, reverse = false, speed = 28 }) {
  const viewportRef = useRef(null);
  const groupRef = useRef(null);
  const [layout, setLayout] = useState({ distance: 0, copies: 2 });

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const group = groupRef.current;

    const measure = () => {
      const distance = group.getBoundingClientRect().width;
      if (distance <= 0) return;
      const copies = Math.max(2, Math.ceil(viewport.clientWidth / distance) + 2);

      setLayout((previous) => previous.distance === distance && previous.copies === copies
        ? previous
        : { distance, copies });
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    observer.observe(group);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="marquee-window adaptive-window" ref={viewportRef}>
      <div
        className={`adaptive-track ${reverse ? "adaptive-track-reverse" : ""}`}
        data-ready={layout.distance > 0}
        style={{
          "--marquee-distance": `${layout.distance}px`,
          "--marquee-duration": `${layout.distance / speed}s`,
        }}
      >
        {Array.from({ length: layout.copies }, (_, copy) => (
          <div
            className="adaptive-group"
            key={copy}
            ref={copy === 0 ? groupRef : undefined}
            aria-hidden={copy > 0 ? true : undefined}
            role="list"
          >
            {items.map((item) => <span className="tech-badge" role="listitem" key={item}>{item}</span>)}
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

export function PortfolioCarousel({
  children,
  label,
  className = "",
  slideClassName = "",
}: {
  children: React.ReactNode[];
  label: string;
  className?: string;
  slideClassName?: string;
}) {
  const [viewportRef, api] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps" });
  const [index, setIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setIndex(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]);

  const total = children.length;
  const previous = useCallback(() => api?.scrollPrev(), [api]);
  const next = useCallback(() => api?.scrollNext(), [api]);

  return (
    <div className={"portfolio-carousel " + className} aria-label={label}>
      <div className="portfolio-carousel__controls">
        <span className="portfolio-carousel__counter">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <div className="portfolio-carousel__actions">
          <button type="button" onClick={previous} aria-label="Item anterior">←</button>
          <button type="button" onClick={next} aria-label="Próximo item">→</button>
        </div>
      </div>
      <div className="portfolio-carousel__viewport" ref={viewportRef}>
        <div className="portfolio-carousel__track">
          {children.map((child, i) => (
            <div className={"portfolio-carousel__slide " + slideClassName} key={i}>
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

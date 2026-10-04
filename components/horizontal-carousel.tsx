"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback } from "react";

export function HorizontalCarousel({
  children,
  label = "Galeria",
}: {
  children: React.ReactNode[];
  label?: string;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", dragFree: false });

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="carousel" aria-label={label}>
      <div className="carousel__controls">
        <span>Deslize para explorar</span>
        <div>
          <button onClick={prev} aria-label="Anterior"><ArrowLeft size={17} /></button>
          <button onClick={next} aria-label="Próximo"><ArrowRight size={17} /></button>
        </div>
      </div>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {children.map((child, index) => (
            <div className="embla__slide" key={index}>{child}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

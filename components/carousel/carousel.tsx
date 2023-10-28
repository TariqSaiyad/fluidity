"use client";

import clsx from "clsx";
import useEmblaCarousel, { EmblaCarouselType } from "embla-carousel-react";
import { ReactNode, useCallback, useEffect, useState } from "react";

import styles from "./carousel.module.scss";

export function Carousel({ children }: { children?: ReactNode }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });
  const [canScroll, setCanScroll] = useState({ prev: false, next: true });
  const [scrollPoints, setScrollPoints] = useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // get number of scroll positions in the container.
  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollPoints(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScroll({
      prev: emblaApi?.canScrollPrev() || false,
      next: emblaApi?.canScrollNext() || false,
    });
  }, []);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className={styles.wrapper}>
      <div
        className={clsx(
          styles.viewport,
          canScroll.next && styles.canScrollNext,
          canScroll.prev && styles.canScrollPrev
        )}
        ref={emblaRef}
      >
        <ul className={styles.container}>{children}</ul>
      </div>
      {/* <div className={styles.controls} aria-hidden>
        <button
          className={clsx(styles.scrollBtn, styles.left)}
          onClick={scrollPrev}
          disabled={!canScroll.prev}
        >
          {"<"}
        </button>
        <div className={styles.progress}>
          {scrollPoints.map((_, index) => (
            <DotButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
        <button
          className={styles.scrollBtn}
          onClick={scrollNext}
          disabled={!canScroll.next}
        >
          {">"}
        </button>
      </div> */}
    </div>
  );
}

export function DotButton({
  selected,
  onClick,
}: {
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(styles.dotBtn, selected && styles.selected)}
      title="Slide to"
    ></button>
  );
}

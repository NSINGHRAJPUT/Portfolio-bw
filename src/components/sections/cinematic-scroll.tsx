"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function CinematicScroll() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const parallaxItems = gsap.utils.toArray<HTMLElement>("[data-parallax]");
    const animations = parallaxItems.map((item) => {
      const speed = Number(item.dataset.parallax ?? 0.1);
      return gsap.to(item, {
        yPercent: -speed * 100,
        ease: "none",
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    const processPin = gsap.timeline({
      scrollTrigger: {
        trigger: "#process-cinematic",
        start: "top top+=70",
        end: "+=500",
        scrub: true,
        pin: "#process-pin",
      },
    });

    processPin.fromTo(
      "#process-pin",
      { opacity: 0.65, scale: 0.98 },
      { opacity: 1, scale: 1, duration: 1, ease: "power2.out" },
    );

    return () => {
      animations.forEach((animation) => animation.kill());
      processPin.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}

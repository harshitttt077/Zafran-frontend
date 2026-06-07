"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GSAPAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Hero / Main Headings fade-in up
      gsap.utils.toArray(".heading-style-h1, .heading-style-h2").forEach((el: any) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // 2. Layout Images scale down effect
      gsap.utils.toArray(".layout1_image-wrapper, .features-card").forEach((el: any) => {
        gsap.from(el, {
          scale: 0.9,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // 3. CTA cards fade up
      gsap.utils.toArray(".cta39_card, .testimonial-card").forEach((el: any) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}

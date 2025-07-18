'use client';
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Lenis from "@studio-freight/lenis";
import Slidescroll from "../components/Slidescroll";




export const Textanimation = () => {


gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let lenis;

    // Initialize SplitType
    const text = new SplitType(".target");

    // Smooth scrolling
    const initSmooth = () => {
      lenis = new Lenis({
        lerp: 0.2,
        smooth: true,
      });

      lenis.on("scroll", () => ScrollTrigger.update());

      const scrollFn = (time) => {
        lenis.raf(time);
        requestAnimationFrame(scrollFn);
      };
      requestAnimationFrame(scrollFn);
    };

    // Scroll-triggered animation for each word and its chars
    const Scroll = () => {
      const chars = text.chars;
      const words = text.words;

      words.forEach((word) => {
        // set perspective on each char's parent (the word element)
        chars.forEach((char) => {
          gsap.set(char.parentNode, { perspective: 2000 });
        });

        gsap.fromTo(
          chars,
          {
            willChange: "opacity, transform",
            opacity: 0,
            y: (position, _, arr) => -40 * Math.abs(position - arr.length / 2),
            z: () => gsap.utils.random(-1500, -600),
            rotationX: () => gsap.utils.random(-500, -200),
          },
          {
            ease: "power1",
            opacity: 1,
            y: 0,
            z: 0,
            rotationX: 0,
            stagger: {
              each: 0.06,
              from: "center",
            },
            scrollTrigger: {
              trigger: word,
              start: "top bottom",
              end: "top top+=15px",
              scrub: true,
            },
          }
        );
      });
    };

    const init = () => {
      initSmooth();
      Scroll();
    };

    init();

    // Cleanup function to destroy Lenis and ScrollTrigger instances on unmount
    return () => {
      if (lenis) lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <div className="absolute top-0 w-screen h-[100vh] flex justify-center items-center">
        SCROLL DOWN FOR THE ANIMATION
      </div>

      <div style={{ marginTop: "100%" }}>
        <div className="flex flex-col w-screen relative px-8 py-8 z-20 ">
          <h2 className="content_title text-[9vw] leading-[0.9] text-center grid gap-0">
            <span className="uppercase target">MOSA</span>
            <span className="uppercase target"> BANDA</span>
          </h2>
        </div>
      </div>

      <div
        className="flex flex-col w-screen relative px-8 py-6 items-center"
        style={{ marginBottom: "350px" }}
      >
        <p
          className="mx-auto my-6 text-[1.5vw]  leading-normal"
          style={{ maxWidth: "660px", marginTop: "5rem" }}
        >
          Musa Banda is a passionate and determined individual who consistently
          strives for excellence in everything he does. With a strong sense of
          purpose and ambition, Musa is deeply committed to both personal growth
          and making a meaningful impact in his community. He is known for his
          creativity, leadership, and the ability to bring people together
          through his positive energy and forward-thinking mindset. Currently
          involved in various academic and community-focused initiatives, Musa
          continues to develop his skills, expand his knowledge, and contribute
          to causes that matter. His dedication, resilience, and drive to uplift
          others make him a respected and inspiring presence among his peers.
        </p>
      </div>
    </div>
  );
};

export default Textanimation;

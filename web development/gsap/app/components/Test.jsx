'use client';
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const Test = () => {
  const slider = useRef(null);

  useEffect(() => {
    // Initialize SplitType for the target texts
    const split = new SplitType(".target");

    // Set perspective for each word's chars and animate them on scroll
    split.words.forEach((word) => {
      gsap.set(word, { perspective: 2000 });

      gsap.fromTo(
        word.children,
        {
          willChange: "opacity, transform",
          opacity: 0,
          y: (i, _, arr) => -40 * Math.abs(i - arr.length / 2),
          z: () => gsap.utils.random(-1500, -600),
          rotationX: () => gsap.utils.random(-500, -200),
        },
        {
          ease: "power1",
          opacity: 1,
          y: 0,
          z: 0,
          rotationX: 0,
          stagger: { each: 0.06, from: "center" },
          scrollTrigger: {
            trigger: word,
            start: "top bottom",
            end: "top top+=15px",
            scrub: true,
          },
        }
      );
    });

    // Setup Lenis smooth scrolling
    const lenis = new Lenis({ lerp: 0.2, smooth: true });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    // Setup horizontal images background styles
    const images = document.querySelectorAll(".img");
    images.forEach((img, i) => {
      img.style.backgroundImage = `url(/parallax/p${i + 1}.jpg)`;
      img.style.backgroundSize = "cover";
      img.style.backgroundPosition = "center";
      img.style.backgroundRepeat = "no-repeat";
    });

    // Horizontal scroll width calculation
    const totalScrollWidth = images.length * 520; // image width with margin approx
    const horizontalSection = document.querySelector("#horizontal");

    // GSAP horizontal scroll animation
    gsap.to(slider.current, {
      x: () => `-${totalScrollWidth - window.innerWidth}`,
      ease: "none",
      scrollTrigger: {
        trigger: horizontalSection,
        start: "top top",
        end: () => `+=${totalScrollWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div>
      <div className="min-h-screen flex justify-center items-center">
        <div className="absolute top-0 w-screen h-[100vh] flex justify-center items-center">
          SCROLL DOWN FOR THE ANIMATION
        </div>

        <h2
          className="text-[8vw] text-center font-bold leading-none"
          style={{ marginTop: "100%" }}
        >
          <span className="target uppercase block">MOSA</span>
          <span className="target uppercase block">BANDA</span>
        </h2>
      </div>

      <div
        className="flex justify-center px-8 mb-[100vh]"
        style={{ marginTop: "50%" }}
      >
        <p className="text-[1.2vw] max-w-[700px] text-center leading-loose">
          Musa Banda is a passionate and determined individual who consistently
          strives for excellence in everything he does. With a strong sense of
          purpose and ambition, Musa is deeply committed to both personal growth
          and making a meaningful impact in his community. He is known for his
          creativity, leadership, and the ability to bring people together
          through his positive energy and forward-thinking mindset.
        </p>
      </div>

      <div
        id="horizontal"
        className="relative w-full h-screen overflow-hidden bg-white"
        style={{ marginTop: "50%" }}
      >
        <div
          ref={slider}
          style={{
            display: "flex",
            height: "100vh",
            alignItems: "center",
            position: "absolute",
            top: 0,
            left: 0,
            willChange: "transform",
          }}
        >
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              style={{
                height: "70vh",
                width: "30rem",
                margin: "0 2rem",
                borderRadius: "12px",
                overflow: "hidden",
                backgroundColor: "#fff",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                position: "relative",
                flexShrink: 0,
              }}
            >
              <div
                className="img"
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Test;

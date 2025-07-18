'use client';
import React, { useRef, useEffect } from "react";

export const Slidescroll = () => {
  
  const slider = useRef(null);
  let current = 0;
  let target = 0;
  const ease = 0.06;

  const lerp = (start, end, t) => start * (1 - t) + end * t;
  const setTransform = (el, transform) => {
    el.style.transform = transform;
  };

  useEffect(() => {
    const images = [...document.querySelectorAll('.img')];

    images.forEach((image, idx) => {
      image.style.backgroundImage = `url(/parallax/p${idx + 1}.jpg)`;
      image.style.backgroundSize = 'cover';
      image.style.backgroundPosition = 'center';
      image.style.backgroundRepeat = 'no-repeat';
    });

    const init = () => {
      // total scroll width = number of images * image width (50vw)
      const totalScrollWidth = images.length * window.innerWidth * 0.9;
      // set body height to enable vertical scrolling for horizontal effect
      document.body.style.height = `${totalScrollWidth - window.innerWidth + window.innerHeight}px`;
    };

    const animate = () => {
      target = window.scrollY;
      current = lerp(current, target, ease);
      setTransform(slider.current, `translateX(${-current}px)`);
      requestAnimationFrame(animate);
    };

    if (slider.current) {
      init();
      animate();
    }
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[100vh]"
      style={{ width: '100%', overflow: 'hidden' }}
    >
      <div
        ref={slider}
        style={{
          display: 'flex',
          height: '100vh',
          position: 'absolute',
          top: 0,
          left: 0,
          willChange: 'transform',
          cursor: 'grab',
        }}
      >
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            style={{
              backgroundColor: 'white',
              overflow: 'hidden',
              height: '70vh',       // shorter than viewport for rectangle shape
              width: '20rem',        // 2 images per viewport
              position: 'relative',
              flexShrink: 0,
              margin: 'auto 0',     // vertically center container inside 100vh
              borderRadius: '12px', // optional, nicer edges
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)', // subtle shadow
              marginRight:'3rem',
              marginLeft:'5rem'
            }}
          >
            <div
              className="img"
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slidescroll;

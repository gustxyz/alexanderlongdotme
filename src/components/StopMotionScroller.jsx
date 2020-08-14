import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { createPortal } from "react-dom";

const StopMotionScroller = ({ url, imgExtension }) => {
  const canvas = useRef(null);
  let html;
  if (typeof document !== 'undefined') {
      html = document.documentElement;
  }

  useEffect(() => {
    const context = canvas.current.getContext("2d");
    const frameCount = 148;
    const currentFrame = index =>
      `${url}${index.toString().padStart(4, "0")}${imgExtension}`;
    const preloadImages = () => {
      for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
      }
    };

    const img = new Image();
    img.src = currentFrame(1);
    canvas.current.width = 1158;
    canvas.current.height = 770;
    img.onload = function() {
      context.drawImage(img, 0, 0);
    };

    const updateImage = index => {
      img.src = currentFrame(index);
      context.drawImage(img, 0, 0);
    };

    window.addEventListener("scroll", () => {
      const scrollTop = html.scrollTop;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
      );

      requestAnimationFrame(() => updateImage(frameIndex + 1));
    });

    preloadImages();
  }, []);

  return (
    <section className="stop-motion-section">
      <canvas ref={canvas} id="stop-motion-scroller" />
    </section>
  );
};

export default StopMotionScroller;

import React, { useRef } from "react";
import Hero from "./sections/hero/Hero";
import Contact from "./sections/contact/Contact";
import GalleryExt1 from "./sections/galleries/exterior/book1/GalleryExt1";
import GalleryExt2 from "./sections/galleries/exterior/book2/GalleryExt2";
import "./App.css";
import GalleryInt1 from "./sections/galleries/interior/book1/GalleryInt1";

const HorizontalScroll = () => {
  const containerRef = useRef(null);

  const handleScroll = (event) => {
    const container = containerRef.current;
    const scrollFactor = 4;
    container.scrollTo({
      left: container.scrollLeft + event.deltaY * scrollFactor,
      behavior: "smooth",
    });
  };

  return (
    <div className="appContainer" ref={containerRef} onWheel={handleScroll}>
      <main>
        <Hero />
        <GalleryExt1 />
        <GalleryExt2 />
        <GalleryInt1 />
        <Contact />
      </main>
    </div>
  );
};

export default HorizontalScroll;

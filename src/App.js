import React, { useRef } from "react";
import "./App.css";

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
        <section>erste section</section>
        <section>zweite section</section>
        <section>dritte section</section>
        <section>vierte section</section>
      </main>
    </div>
  );
};

export default HorizontalScroll;

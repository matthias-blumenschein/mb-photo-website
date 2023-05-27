import React, { useRef } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./sections/hero/Hero";
import Contact from "./sections/contact/Contact";
import GalleryExt1 from "./sections/galleries/exterior/book1/GalleryExt1";
import GalleryExt2 from "./sections/galleries/exterior/book2/GalleryExt2";
import GalleryInt1 from "./sections/galleries/interior/book1/GalleryInt1";
import "./App.css";

const HorizontalScroll = () => {
	const containerRef = useRef(null);

	const handleScroll = (event) => {
		const container = containerRef.current;
		const scrollFactor =
			container.scrollLeftMax < 10000
				? container.scrollLeftMax / 2500
				: container.scrollLeftMax / 3500;
		container.scrollTo({
			left: container.scrollLeft + event.deltaY * scrollFactor,
			behavior: "smooth",
		});
	};

	return (
		<div className="appContainer" ref={containerRef} onWheel={handleScroll}>
			<Navbar />
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

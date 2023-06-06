"use strict";

window.addEventListener("load", () => {
	const slides = document.querySelectorAll(".slides-wrapper-item");
	const next = document.querySelector("#next");
	const prev = document.querySelector("#prev");
	const counter = document.querySelector("#counter");

	const wrapper = document.querySelector("#slides-wrapper");

	let currentSlide = 0;
	let x = 600;
	
	next.addEventListener("click", () => {
		wrapper.style.cssText = `
				transition: all 0.5s;
				transform: translateX(-${x}px);
			`;
		currentSlide++;
		x += 600;

		if (x >= slides.length * 600) {
			x = 0;
		}

		if (currentSlide >= slides.length) {
			currentSlide = 0;
		}

		setState(currentSlide);
	});

	prev.addEventListener("click", () => {
		x -= 600;
		wrapper.style.cssText = `
				transition: all 0.5s;
				transform: translateX(-${x}px);
		`;
		if (x < 600) {
			x = slides.length * 600;
		}

		setState(currentSlide);
		currentSlide--;

		if (currentSlide < 0) {
			currentSlide = slides.length - 1;
		}
	});

	function setState (state) {
		counter.textContent = `${state + 1} / ${slides.length}`;
	}

	setState(currentSlide);
});

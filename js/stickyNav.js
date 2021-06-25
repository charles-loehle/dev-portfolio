const aboutSection = document.querySelector('#about');
const aboutSectionYcoord = aboutSection.offsetTop;
// console.log(aboutSectionYcoord);
const header = document.querySelector('#header');

window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	// console.log(
	// 		typeof window.scrollY === 'undefined' ? window.pageYOffset : window.scrollY
	// 	);

	// scrollY no IE support. pageYOffset IE 9 > support.
	// The read-only scrollY property of the Window interface returns the number of pixels that the document is currently scrolled vertically.
	if (
		(typeof window.scrollY === 'undefined'
			? window.pageYOffset
			: window.scrollY) >
		aboutSectionYcoord - 400
	) {
		header.classList.add('sticky');
		// header.classList.add('fade-in');
		// document.querySelector('.logo img').classList.add('fade-in');
	} else {
		header.classList.remove('sticky');
		// header.classList.remove('fade-in');
		// document.querySelector('.logo img').classList.remove('fade-in');
	}

	if (
		(typeof window.scrollY === 'undefined'
			? window.pageYOffset
			: window.scrollY) >
		aboutSectionYcoord - 350
	) {
		header.classList.add('fade-transition');
		// header.classList.add('fade-in');
		// document.querySelector('.logo img').classList.add('fade-in');
	} else {
		header.classList.remove('fade-transition');
		// header.classList.remove('fade-in');
		// document.querySelector('.logo img').classList.remove('fade-in');
	}

	if (
		(typeof window.scrollY === 'undefined'
			? window.pageYOffset
			: window.scrollY) > aboutSectionYcoord
	) {
		header.classList.add('scrolling');
	} else {
		header.classList.remove('scrolling');
	}
}

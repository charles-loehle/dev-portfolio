const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li');
// console.log(navLi);

window.addEventListener('scroll', () => {
	// console.log(pageYOffset);
	let current = '';

	sections.forEach(section => {
		// get distance from top of page to the current section
		const sectionTop = section.offsetTop;
		// console.log(sectionTop);

		// get the heigh of each section
		const sectionHeight = section.clientHeight;
		// console.log(sectionHeight);

		// if the distance scrolled is past a specified value, get the current sections's id
		if (pageYOffset >= sectionTop - sectionHeight / 3) {
			current = section.getAttribute('id');
			// console.log(current);
		}
	});

	navLi.forEach(li => {
		li.classList.remove('active');

		if (li.classList.contains(current)) {
			li.classList.add('active');
		}
	});
});

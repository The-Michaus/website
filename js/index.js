import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/scrollspy';
import {
	faInstagram,
	faPinterest,
	faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faCheck, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import '../scss/styles.scss';

library.add(faInstagram, faPinterest, faLinkedinIn, faCheck, faTrophy);

dom.watch();

window.addEventListener('DOMContentLoaded', () => {
	// Collapse responsive navbar when toggler is visible
	const navbarToggler = document.body.querySelector('.navbar-toggler');
	const responsiveNavItems = [].slice.call(
		document.querySelectorAll('#navbarSupportedContent .nav-link')
	);
	responsiveNavItems.map(function (responsiveNavItem) {
		responsiveNavItem.addEventListener('click', () => {
			if (window.getComputedStyle(navbarToggler).display !== 'none') {
				navbarToggler.click();
			}
		});
	});
});

/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.getElementsByTagName('section');
const navbar = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Begin Main Functions
 * 
*/

// build the nav
for (let section of sections) {
	let navanchor = document.createElement('a');
	navanchor.setAttribute('href', "#" + section.id);
	navanchor.innerHTML = section.dataset.nav;
	let navlist = document.createElement('li');
	navlist.appendChild(navanchor);
	navlist.className = 'menu__link';
	navlist.setAttribute('data-link', section.id);
	navbar.appendChild(navlist);
	console.log(section);
};

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
let navlists = navbar.getElementsByTagName("li");
for (let navlist of navlists) {
  navlist.addEventListener('click', function (e) {
    e.preventDefault();
    var elementScroll = document.querySelector("#" + navlist.dataset.link)
    elementScroll.scrollIntoView({ behavior: "smooth", block: "start" });
  })
};


// Set sections as active
window.addEventListener('scroll', function() {
	for (let section of sections) {
		let pos = section.getBoundingClientRect().top;
		if (pos <= 1.5 && -pos < section.offsetHeight-1.5) {
			section.classList.add('your-active-class');
			for (let navlist of navlists) {
				if (navlist.dataset.link == section.id) {
					navlist.classList.add('currentSection');
				}
			};
		}
		else {
			section.classList.remove('your-active-class');
			for (let navlist of navlists) {
				if (navlist.dataset.link == section.id) {
					navlist.classList.remove('currentSection');
				}
			};
		}
	};
})
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
const nav = document.getElementById('navbar__list'); // ul
const sections = document.querySelectorAll('section');// [section1 ,"section2" ,"section3" , "section4"]
const fragment = document.createDocumentFragment();



/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav

// using forEach to loop on sections
sections.forEach(section => {
    const li = document.createElement('li'),  //create new Element which is the list item and store it in new Variable.
        a = document.createElement('a'),    //create new Element which is the anchor and store it in new Variable.
        sectionDataNav = section.getAttribute('data-nav'), //get the attribute value ,called (data-nav), in each scetion & store it in a new variable.
        text = document.createTextNode(`${sectionDataNav}`),    // create a text node with the privous variable and store it in a new variable .
        sectionId = section.getAttribute('id'); // get the attribute value , called id , in each section & store it in new variable .
    li.appendChild(a);                           // make <a> is a child of list item  .
    a.appendChild(text);                         // append a with text .
    a.setAttribute("href", `#${sectionId} `);    // set an attribute to the anchor element .
    a.onclick = (e) => { e.preventDefault(); };  // Disable the default re-act of href , to use scrollIntoView to go to the corresponding section.
    a.addEventListener('click', () => {          // when user click on anchor element , move smoothly to the corresponding section  .
        section.scrollIntoView({
            'behavior': 'smooth'
        });
    });
    fragment.appendChild(li);                     // append fragment with li


});
nav.appendChild(fragment);                        //  append nav variable (ul) with fragment .








// Add class 'your-active-class' to only the active section when near top of viewport
window.addEventListener('scroll', () => {
    sections.forEach(active => {
        let sectionSize = active.getBoundingClientRect();
        if (sectionSize.top >= 0 && sectionSize.top <= 200) {
            sections.forEach(section => {
                section.classList.remove('your-active-class');
            });
            active.classList.add('your-active-class');

            /*Add class 'active' to only the active anchor in the nav bar menu when
            which has text contect  equal to data-nav attribute of the active section*/
            const links = document.querySelectorAll('a');
            links.forEach(activeLink => {
                if (active.getAttribute('data-nav') == activeLink.textContent) {
                    links.forEach(link => {
                        link.classList.remove("active");        //  remove class active from all anchors
                    });
                    activeLink.classList.add("active");         //  Add class active only to the active anchor
                }
            });
        }
    });
});

// Scroll to anchor ID using scrollTO event


/**
* End Main Functions
* Begin Events
*
*/

            // Build menu 

            // Scroll to section on link click

            // Set sections as active



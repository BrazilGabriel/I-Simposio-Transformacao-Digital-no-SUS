const mobileNav = () => {
    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');

    //State
    let isMobileNavOpen = false;

    headerBtn.addEventListener('click', () => {
        isMobileNavOpen = !isMobileNavOpen;
        if (isMobileNavOpen) {
            mobileNav.style.display = 'flex';
            document.body.style.position = 'relative';
            
            document.body.style.overflowY = 'hidden';

        } else {
            mobileNav.style.display = 'none';
            document.body.style.position = 'absolute'
            document.body.style.overflowY = 'auto';

        }
    });

    mobileLinks.forEach(link=>{
        link.addEventListener('click', () => {
            isMobileNavOpen = false;
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        })
    });

    function myFunction(x) {
        if (x.matches) { // If media query matches
            isMobileNavOpen = false;
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }
      }
      
      var x = window.matchMedia("(min-width: 768px)")
      myFunction(x) // Call listener function at run time
      x.addListener(myFunction) // Attach listener function on state changes
};

export default mobileNav;

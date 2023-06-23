const mobileNav = () => {
    const headerBtn = document.querySelector('.header__bars');
    const headerImg = document.querySelector('.header__icon');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');

    //State
    let isMobileNavOpen = false;

    headerBtn.addEventListener('change', () => {
        isMobileNavOpen = !isMobileNavOpen;
        if (isMobileNavOpen) {
            mobileNav.style.display = 'flex';
            headerImg.style.visibility = 'hidden';
            document.body.style.position = 'relative';
            document.body.style.overflowY = 'hidden';

        } else {
            mobileNav.style.display = 'none';
            document.body.style.position = 'absolute'
            document.body.style.overflowY = 'auto';
            headerImg.style.visibility = 'visible';

        }
    });

    mobileLinks.forEach(link=>{
        link.addEventListener('click', () => {
            isMobileNavOpen = false;
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
            headerImg.style.visibility = 'visible';
            headerBtn.checked = false;
        })
    });

    function closeMobileMenu(x) {
        if (x.matches) { // If media query matches
            isMobileNavOpen = false;
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto';
            headerImg.style.visibility = 'visible';
            headerBtn.checked = false;
        }
      }
      
      var x = window.matchMedia("(min-width: 768px)")
      closeMobileMenu(x) // Call listener function at run time
    //   x.addListener(myFunction) // Attach listener function on state changes
      x.addEventListener("change", () => {
        closeMobileMenu(x) ;
      });
      
};

export default mobileNav;

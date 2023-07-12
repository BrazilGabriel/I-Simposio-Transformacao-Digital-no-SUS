const backToTop = () => {
    const navbar = document.getElementById('navbar');
    const logo = document.getElementById('logo');
    const toTop = document.querySelector(".to-top");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            toTop.classList.add("active");
        } else {
            toTop.classList.remove("active");
        }

        if(window.scrollY >= 700){
            navbar.classList.add("sticky");
            logo.classList.add("sticky");

        } else {
            navbar.classList.remove("sticky");
            logo.classList.remove("sticky");

        }
    })





}
export default backToTop;
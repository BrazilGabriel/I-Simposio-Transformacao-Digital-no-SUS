const backToTop = () => {
    const navbar = document.getElementById('navbar');
    const menu = document.getElementById('menu');
    const toTop = document.querySelector(".to-top");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            toTop.classList.add("active");
        } else {
            toTop.classList.remove("active");
        }

        if(window.scrollY >= 700){
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    })





}
export default backToTop;
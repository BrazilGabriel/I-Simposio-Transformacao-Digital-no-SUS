const loading = () => {
    const siteBody = document.getElementsByClassName("loader__body")[0];
    siteBody.onload = (event) => {
        console.log("page is loaded")
        document.getElementsByClassName('box-load')[0].style.display="none";
        document.getElementsByClassName('content')[0].style.display="block";

    }
}
export default loading;
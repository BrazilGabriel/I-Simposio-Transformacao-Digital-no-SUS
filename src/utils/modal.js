const modal= () => {
    const modal = document.querySelector("dialog")
    const closeButton = document.querySelector("dialog button")
    
    // modal.showModal();
    
    closeButton.onclick = function () {
        modal.close();
        console.log("sdsds");
    }


}
export default modal;
// Get the modal
var modal = document.getElementById('LoginPopUp')

window.addEventListener('click', CloseWindow);

function CloseWindow(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



// Get the modal
var LoginForm = document.getElementById('LoginPopUp')
var CloseX = document.getElementById('CloseButton')

window.addEventListener('click', CloseWindow);

function CloseWindow(event) {
    if (event.target == LoginForm || event.target == CloseX) {
        LoginForm.style.display = "none";
    }
}



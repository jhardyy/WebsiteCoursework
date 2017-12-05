// Get the modal
var LoginButton = document.getElementById('LoginPopUp')


window.addEventListener('click', CloseWindow);

function CloseWindow(event) {
    if (event.target == LoginForm || event.target == CloseX) {
        LoginForm.style.display = "none";
    }
}


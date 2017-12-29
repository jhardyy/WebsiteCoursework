
let LoginForm = document.getElementById('LoginPopUp')

let CloseX = document.getElementById('CloseButton')


window.addEventListener('click', CloseWindow);


function CloseWindow(event) {
    
    if (event.target != LoginForm || event.target == CloseX) {
        LoginForm.style.display = "none";
    }
}



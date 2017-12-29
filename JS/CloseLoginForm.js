//create a variable called 'loginform' and give it the value of the element with the ID 'LoginPopUp'
let LoginForm = document.getElementById('LoginPopUp')
//create a variable called 'CloseX' and give it the value of the element with the ID 'CloseButton'
let CloseX = document.getElementById('CloseButton')

//Add an event listener to the window that isn't inside the loginform. If this area is clicked, call the function 'CloseWindow'
window.addEventListener('click', CloseWindow);


//Create a function called closewindow.
function CloseWindow(event) {
    //if the target being clicked is the close button and is not the login form or the then hide the login form. 
    if (event.target != LoginForm || event.target == CloseX) {
        LoginForm.style.display = "none";
    }
}



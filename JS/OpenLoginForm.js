//create a variable called 'LoginButton' and assign it to the element with the ID loginBtn'.
//Add an eventlistener to listen for a click on to the element with the ID 'LoginBtn'.
//If there is a click, execute the function 'OpenLoginForm'
let LoginButton = document.getElementById('LoginBtn').addEventListener('click', OpenLoginForm);
//create a variable called 'loginFormpopup' and assign it to the element with the ID 'LoginPopUp'.
let LoginFormPopup = document.getElementById('LoginPopUp');


//create a function called OpenLoginForm.
function OpenLoginForm() {
        //Make the LoginForm appear to the user by setting its display to block.
        LoginFormPopup.style.display = "block";
}


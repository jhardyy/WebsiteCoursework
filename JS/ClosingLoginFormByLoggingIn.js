// Add an event listener to the element with the ID 'LoginFormLoginButton' so that when the element is clicked it calls the function 'CLoseLoginForm'
document.getElementById('LoginFormLoginButton').addEventListener('click', CloseLoginForm);
//create a variable called LoginForm and assign it to the element with the ID 'LoginPopUp'.
let LoginForm = document.getElementById('LoginPopUp')
//create a variable called LogoutBtn and assign it to the element with the ID 'LogoutBtn'.
let LogoutBtn = document.getElementById('LogoutBtn')

//create a function called CloseLoginForm
function CloseLoginForm() {
    //Set the display of LoginForm to 'none' making it hidden.
    LoginForm.style.display = "none";
    //call the function to check if there is a cookie set.
    checkCookie(Username);
    //if the username text box is equal to : blank, null or UsernameHolder then hide the logout button by setting the display to none.
    if (document.getElementById('UsernameHolder').value == "" | document.getElementById('UsernameHolder').value == null | document.getElementById('UsernameHolder').value == 'UsernameHolder')
        LogoutBtn.style.display = "none";
    //Else, show the logout button by setting its display to inline.
    else {
        LogoutBtn.style.display = "inline";
    }


}
    












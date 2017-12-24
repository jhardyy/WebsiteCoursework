// Get the modal
document.getElementById('LoginFormLoginButton').addEventListener('click', CloseLoginForm);
var LoginForm = document.getElementById('LoginPopUp')
var LogoutBtn = document.getElementById('LogoutBtn')


function CloseLoginForm() {
    LoginForm.style.display = "none";
    checkCookie(Username);
    if (document.getElementById('UsernameHolder').value == "" | document.getElementById('UsernameHolder').value == null | document.getElementById('UsernameHolder').value == 'UsernameHolder')
        LogoutBtn.style.display = "none";
    else {
        LogoutBtn.style.display = "inline";
    }


}
    












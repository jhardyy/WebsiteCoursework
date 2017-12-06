// Get the modal
document.getElementById('LoginFormLoginButton').addEventListener('click', CloseLoginForm);
var LoginForm = document.getElementById('LoginPopUp')
var LogoutBtn = document.getElementById('LogoutBtn')

function CloseLoginForm() {
    LoginForm.style.display = "none";
    LogoutBtn.style.display = "inline";    
    checkCookie();
}











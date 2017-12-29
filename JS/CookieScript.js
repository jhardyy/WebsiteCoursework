function setCookie(CookieName, CookieValue, exdays) {
    let date = new Date();
    date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toGMTString();
    document.cookie = CookieName + "=" + CookieValue + ";" + expires + ";path=/";
}

function getCookie(CookieName) {
    let name = CookieName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(User) {
    let CookieValueHolder = document.getElementById('UsernameHolder').value;
    if (CookieValueHolder == 'UsernameHolder' | CookieValueHolder == "" | CookieValueHolder == null) {
        alert("Please enter a valid Username");
    }
    else {
        alert("Thank you for logging in  " + CookieValueHolder);
        setCookie('Username', CookieValueHolder, 30);
        PerformGreeting(CookieValueHolder);
         }
    }


document.getElementById('LogoutBtn').addEventListener('click', deleteCookie)

function deleteCookie(name) {
    document.cookie = "Username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    alert("You have Logged out");
}

function PerformGreeting(User) {
    let myName = document.getElementById("Username");
    let userName = User;
    myName.innerHTML = userName;
    event.preventDefault();
    return false;
}
function setCookie(CookieName, CookieValue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = CookieName + "=" + CookieValue + ";" + expires + ";path=/";
}

function getCookie(CookieName) {
    var name = CookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
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
    var User = getCookie("Username");
    if (User != "") {
        PerformGreeting(User);
    }
    else {

        //if (User != "" && User != null) {

        var CookieValueHolder = document.getElementById('UsernameHolder').value;
        alert("Thank you for logging in  " + CookieValueHolder);
        setCookie('Username', CookieValueHolder, 30);
        checkCookie();
    //}
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
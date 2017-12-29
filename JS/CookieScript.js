//create a function called setcookie with the parameters cookiename, cookievalue and exdays.
function setCookie(CookieName, CookieValue, exdays) {
    //create a variable called date and assign it the value of a date.
    let date = new Date();
    //set the time of the variable date
    date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
    //create a variable called expires and assign it the date string format
    let expires = "expires=" + date.toGMTString();
    //assign values to the document cookie
    document.cookie = CookieName + "=" + CookieValue + ";" + expires + ";path=/";
}

//create a function called getcookie with the parameter CookieName.
//This function fetches and decodes the cookie.
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

//create a function called checkCookie with the parameter User.
function checkCookie(User) {
    var User = getCookie("Username");
    //create a variable called CookieValueHolder and assign it the value of the element with the ID UsernameHolder
    let CookieValueHolder = document.getElementById('UsernameHolder').value;
    //if the CookieValueholders is either UsernameHolder, blank or null then alert the user and tell that that they need to insert a valid username.
    if (CookieValueHolder == 'UsernameHolder' | CookieValueHolder == "" | CookieValueHolder == null) {
        alert("Please enter a valid Username");
    }
    //else, alert the user and thank them for logging in with a personal greeting using the username they just entered.
    else {
        alert("Thank you for logging in  " + CookieValueHolder);
        //call the function setCookie and pass it the parameters Username, CookieValueHolder and 30.
        setCookie('Username', CookieValueHolder, 30);
        //Execute the function PerformGreeting and pass it the parameter CookieValueHolder. 
        PerformGreeting(CookieValueHolder);
         }
    }

//Add an event listener to the element with the ID 'LogoutBtn' and listen for a click. If a click happens, call the function 'deleteCookie'.
document.getElementById('LogoutBtn').addEventListener('click', deleteCookie)

//create a function called deleteCookie with the parameter name.
function deleteCookie(name) {
    //to delete a cookie set the username to blank and the expirey date to a date in the past.
    document.cookie = "Username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    //alert the user they have logged out.
    alert("You have Logged out");
}

//create a function called PerformGreeting with the parameter User.
function PerformGreeting(User) {
    //create a variable called myName and assign it the element with the ID 'Username'.
    let myName = document.getElementById("Username");
    //create a variable called userName and assign it the value of the variable 'User'
    let userName = User;
    //assign the innerHTML of myName to the value of userName.
    myName.innerHTML = userName;
    event.preventDefault();
    return false;
}

function OnloadCheck(User) {

}
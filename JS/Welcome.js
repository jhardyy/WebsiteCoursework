var today = new Date();
var TheCurrentHour = today.getHours();
var Greeting;
var TempHolder;
if (TheCurrentHour > 18) {
    Greeting = 'Good evening, welcome to The DMU Restaurant.';
} else if (TheCurrentHour > 12) {
    Greeting = 'Good afternoon, welcome to The DMU Restaurant.';
} else if (TheCurrentHour > 0) {
    Greeting = 'Good Morning, welcome to The DMU Restaurant.';
} else {
    Greeting = 'Welcome to The DMU Restaurant.';
}
TempHolder = document.getElementById('Username');
TempHolder.innerHTML = Greeting;

// accessibility checker, user testing 
var today = new Date();
var TheCurrentHour = today.getHours();
var Greeting;
if (TheCurrentHour > 18) {
    Greeting = 'Good evening, welcome to The DMU Restaurant.';
} else if (TheCurrentHour > 12) {
    Greeting = 'Good afternoon, welcome to The DMU Restaurant.';
} else if (TheCurrentHour > 0) {
    Greeting = 'Good Morning, welcome to The DMU Restaurant.';
} else {
    Greeting = 'Welcome to The DMU Restaurant.';
}
document.write(Greeting);
//use in line html. accessibility checker, user testing 
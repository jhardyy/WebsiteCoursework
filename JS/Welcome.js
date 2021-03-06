﻿//create a variable called Today and assign it the value of a date.
let Today = new Date();
//create a variable called TheCurrentHour and assign it the hour it currently is in real time.
let TheCurrentHour = Today.getHours();
//create a variable called Greeting.
let Greeting;
//create a variable called TempHolder.
let TempHolder;
//if the current hour is 6pm or later, then the greeting shall say good evening.
if (TheCurrentHour > 18) {
    Greeting = 'Good evening, welcome to The DMU Restaurant.';
  //else if, the current hour is 12pm or later, then the greeting shall say good afternoon.
} else if (TheCurrentHour > 12) {
    Greeting = 'Good afternoon, welcome to The DMU Restaurant.';
  //else if, the current hour is midnight or later, then the greeting shall say good morning.
} else if (TheCurrentHour > 0) {
    Greeting = 'Good Morning, welcome to The DMU Restaurant.';
  //else just incase something messes up in fetching the time etc, have a back up greeting that just says welcome.
} else {
    Greeting = 'Welcome to The DMU Restaurant.';
}
//assign tempholder the element with the ID 'Username'
TempHolder = document.getElementById('Username');
//assign the innerHTML of tempholder the value of the greeting that has been generated by the function.
TempHolder.innerHTML = Greeting;

# Website Coursework - DMU Restaurant

## About the Website
This website is for a restaurant located on-site at DMU university. Located at the very top of the page in the header of the webpage, there is a JavaScript greeting. The greeting changes depending on what time of day the user visits the website. It has a universal banner located at the top of the website that uses a section element as an image container. It also contains an h1 element that acts as a website title.  

The website has a login button located in the banner. Pressing this button causes a login form to pop up. The website has a basic built-in validation for the username. If the user leaves the username field of the form blank, it will cause an alert notifying the user that they must enter a valid username.  

Once the user has successfully 'logged in' the website uses JavaScript cookies to display the username in the header element. 

The website has three 'webpages' embedded into one single page application. When the webpage is loaded it automatically shows the first tab and its content. The first tab is a welcome tab that shows pictures of food the restaurant serves using a JavaScript slideshow that scrolls through three images. Each image also has a caption to go with it.  

The 2nd tab is an 'About us' tab that has some basic information about the restaurant. It has an embedded Google Map API that shows exactly where the restaurant is (The map is meant to have a red pin to show the location on the map. However, the red pin doesn't always appear.) 

The 3rd tab is a Menu tab that displays a few different lists with different items. These lists act as restaurant menus. 

## Problems and Issues I faced
1. Having code that used 'onclick' 

    * The code for the JavaScript cookies that I used and adapted from W3 schools used onclick extensions. This was a problem due to the fact I needed this code to use event listeners. To fix this issue I went back to the lab exercises to find out how they worked. Once I had understood how the event listeners work I tried to incorporate what I had learned into the code for the cookies. It took a few iterations to successfully replace the onclicks with event listeners but eventually it worked. 

2. Having code that used 'document.write' instead of inner HTML. 

    * The code for the greeting I used from https://calcheck.co.uk/ used document.write to write out the greeting generated from the javascript. I had to make it so that it generated the greeting using .innerHTML. To fix this problem I went back to the lab work to see how .innerHTML behaved and how it was used.

3. I coded my CSS to be Desktop first and scale using max-width breakpoints.
    
    * I first coded my CSS and webpage to be desktop first instead of mobile first. This was a major problem as it meant I had to rewrite the majority of my CSS. This took a while but I managed to get everything working mobile first.

4. Gitpages are not working
    * When I added comments into my code gitpages started throwing up errors in the console log saying that variables had already been defined. I had three variables named the same. however, they were all located in three separate javascript. I changed all three of them to different names just in case this was somehow causing an issue. This did get rid of the errors however the core functionality of my website no longer works in gitpages. If I load up my website using visual studio I get no errors and everything works perfectly fine.

5. Refreshing the page clears cookie message.
	* One problem i have is that when the user is logged in and refreshes the page, the personalised message from the cookies is taken away. I tried to code a function that would check to see if a cookie exists when the page is loaded but couldn't quite figure it out. This could be a future opportunity for the website.
## Initial Designs and designing the website
The reason I have designed the website in this way is due to the fact I believe it provides simple and yet effective navigation. Another reason I chose this design is that a single page application has faster loading times than regular multi-page websites.  

A lot of the elements within the website contain a 'hover' attribute and turn a different colour when the user is hovering over the option. This hover feature helps the users to locate where their cursor is and adds to the user-friendliness of the website. 

The website is completely responsive and is designed to fit mobile first. The website uses six breakpoints to constantly adjust the sizes of elements to fit bigger screens.

Below is the rough and simple sketch of the Mobile version of the website. 

![Rough Mobile Design](/Images/Readme1.jpg)

Below is the rough and simple sketch of the desktop version of the website for bigger screens. Everything is much bigger in the desktop version and the breakpoints will change how certain elements look to make them fit the webpage better. 

![Rough Desktop Design](/Images/Readme2.jpg)

## User testing
Changes after user testing feedback

1. After the feedback from users testing my website, it became clear that one issue was that users didn't like how the logout button was on show even if they hadn't logged in. I have changed this so that the logout button would appear only when the user has logged in. Also now when the user clicks the logout button the button is automatically hidden.

2. Another problem that became clear after user feedback was that users struggled to see where their cursor was when selecting options. To fix this issue I have made the three main options: Home, About Us and Menus, turn black when a user is hovering over them. I have also made the login and logout buttons change in the same way.

3. The last problem I received from user feedback was that users were struggling to read the white 'DMU restaurant' at the top of the website. I changed the font to black in order to fix this however after more feedback this was just as hard to read. Instead, I made the background of the header a faded black which made the header stand out.


## Validator Results
I ran my HTML code through the validator and the results are below. I got one warning which was a blank heading. The reason this heading is blank is due to the fact it is set via a javascript greeting.

![HTMLValidatorResults](/Images/HTMLValidatorResults.png)

I ran my CSS code through the validator and the results are below. I got no errors however I did get three warnings.These three warnings I got given were all to do with the webkit animation being an unknown extension.

![HTMLValidatorResults](/Images/CSSValidatorResults.png)

I ran my HTML through an accessibility checker and the results are shown below. I got 6 known problems, they all relate to the inputs for the username and password on the login form. All 6 errors seen to be pointing out that the inputs for username and password have no text inside them. However, instead, I have placeholders inside the text inputs which act in a very similar way.

![HTMLValidatorResults](/Images/AccessibilityValidatorResults.png)

## References

Throughtout developing my website i used these references below:

https://developers.google.com/maps/documentation/embed/start 

https://www.w3schools.com/charsets/ref_html_entities_4.asp 

https://www.w3schools.com/js/js_cookies.asp 

https://www.w3schools.com/w3css/w3css_slideshow.asp 

https://calcheck.co.uk/js/welcome.js 

https://www.w3schools.com/js/js_htmldom_eventlistener.asp 
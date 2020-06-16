# My Thought Process

## Initial Thoughts
- My initial thought process is to think about how the archived mails data will come to the frontEnd from backEnd in the realistic scenario.
- Then I decided that the archived mails is a array of Objects with each and every object as one mail.
- Then I thought of functionalities, How can I filter those mails using a date filter and search message? 
- Once, I got the brief idea of mail Data and Implementation then I thought of which framework to use.
- As, I am more comfortable in react I though of whether my ideas can be achieved using react. The answer is yes, then I started my actual work.

## Implementation
- I looked at the mockup design, I wanted to implement the case of "Zero Mails" in the frontEnd.
- I took a dummy date called Mails as an array of no elements.
- Then I thought of How to divide the various aspects of the UI into different components.
- Then I decided the layout of the viewport using these various components. 
- While choosing the Date pickers I picked two separate date pickers instead of date range picker for the reasons I mentioned in IMPROVEMENTS.md
- The I placed an input for the search bar.
- I binded those date pickers and search with the state variable.
- I took the mail archiver logo and arranged all these elements to make the "Zero Mail" UI.
- The I took some 4 elements in the the Mails array.
- I have to choose between using tables or making each mail as separate component.
- As each mail have different data that involves badges and attachments and also as the UI for mobile is not table, I decided to create a separate component for each mail.
- That components uses the Mails array and populates the UI for every object in the array in a loop.
- Then I took the different cases in data like for adding attachment icon and adding badge if a mail is sent to multiple people.
- Then I decided to Implement a page to show the emails when it is clicked. I used routes to achieve that.
- I made a simple UI for show the email contents.
- Then I implemented date filters, search, date reset, search reset functionalities.
- Then I added the date sort functionality.
- Then checked the application and found that the application state is not saved when I navigate to different route.
- Then I used redux to fix the problem and integrated redux store to the application.
- Added more dummy objects to Mails array and tested the various combinations of filter, search and reset.
- Fixed minor bugs I found.

# Design
- After I completed the functionality requiements of the application then I started working on the design part, to make the application look like the mock up UI.
- I used media queries to achieve responsiveness

# Internet Explorer Support
- React support for IE require polyfills.
- I setup the necessary polyfills for the IE Support.
- I fixed the design bugs I found in IE.
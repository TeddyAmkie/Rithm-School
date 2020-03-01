# Conceptual Exercise

Answer the following questions below in Markdown. 
Check out the [Markdown Cheat Sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

## CSS

### What are differences between ``display: inline`` and ``display: block``?
Block uses 100% of parent width, while inline will wrap it to only using the space it needs allowing multiple items side by side.
Inline ignores width/height properties, which is what makes inline-block a nice alternative when you want side-by-side items with a width/height prop.

### What are some advantages to using a CSS framework like Twitter Bootstrap?
Makes tricky columns layout easier, consistent across browsers, and is responsive out of the box. While it has a cookie cutter feel it has been used so much, it is fairly easy to modify it to be unique to your own site branding. 

## jQuery

### What is jQuery?
jQuery is a library for manipulating DOM, adding event listeners, animating elements, and making HTTP requests. 

### What are differences between finding things with `document.querySelector(".book")` and `$(".book")`?
`document.querySelector(".book")` is an html class selector while `$(".book")` is a jQuery class selector.
---

## Advanced JavaScript

### What is event delegation? Why would you use it?
When many events are needed to be done, event delegation makes a parent responsible for calling a callback as they are needed.
This allows only 1 event handler to be made and used as much as it is needed for its children, instead of all the children having one created and always
being active
### What is the `event` object? What kinds of things are in it?
When there is user input on an element that has an event handler, it creates an object and stores the data associated with the user input.
 It contains useful properties such as .target allowing us to know on what specific DOM element it was used on. Time/position aside, it also allows
 us to store information inside of .data that can easily be sent across the web and is cross-browser friendly.

### In the Hack or Snooze API project, what did we use async/await for?
Everything...almost. Anytime we had a Promise. It allowed us to make sure when a user was browsing a page, they were looking at what was live on the server. We would
also use it to make sure a user couldn't replicate server requests for adding/deleting a story.
We had the whole UI set in an async function so it would load once the DOM was complete. 
### What happens if you forget the `async` keyword on  the declaration of a function that uses `await` inside of it?
Syntax Error, cannot use await inside of a function that is not async.
### What happens if you forget the `await` keyword in front of an asynchronous expression?
Await makes the function a block function preventing all other code from running. The asynchronous expression will wait for the stack to clear before running the expression.
### What is the difference between a static method and an instance method?
A static method is a class method that can only be run on the class, and instances of the class cannot use it. An instance method
is inherited by all new instances of the Class.
### In JS: `let a = [1, 2, 3]; b = a.slice(); a.push(4);`: does `b` contain 4? Why or why not? 
No, slice creates a new array. b and a do not reference the same point in memory.
### What are some strategies you've learned for being organized in larger projects, like Hack or Snooze?
We kept the source of truth to the web server, so we always knew the data we had in local was synced up universally. 

We would also, after figuring out the flow and logic of a problem, plan how to code it for future usability.
 While it took much longer to solve the problem, a lot of future problems were completed by adding one line of code or by re-using past
functions/copy+pasting and just changing variables.

Added big comment blocks to seperate code to easily bunch up similar functions near eachother to find easily. While the project was not big enough,
 it made me aware of how adding a section + identifier allows for making a table of contents that I could CTRL+F to easily find my code in big projects.
---

## How the Web Works and APIs

### What is a hostname?
The name of the website. It's the unique name the DNS uses to point to the ip address
### What is an IP address?
It is a unique identifier for a machine.
### What is a port?
A port is like a door that allows a server/computer(or other) to communicate via the internet. Certain protocols require using specific ports
to transfer data.
### What is DNS?
DNS is what converts a hostname into an ip address when sending requests over a network.
### What is an HTTP header?
It's what stores all the data being sent in an HTTP request. HTTP requires specific values to use the protocol depending on the type of request.
It contains: 
### What is an HTTP Response Code?
After making a request to a server, a response code will be returned. This code is a number that will inform you if your code was successful,
 or if there was an error. If there is an error, it will clarify what the error was based on the number.
### What is the difference between GET and POST?
GET - fetches info without changing server data. Arguments are passed in a query string.
POST - changes server data, arguments sent in a body of requirements. 

### What is AJAX? Why would you use it?
Asynchronous javascript. AJAX requests act as a JS return, allowing it to easily be used in code. It can communicate with other sites and makes
sites interactive. It prevents re-painting the page everytime the user makes an HTTP request. 
### What is JSON?
An object-like string. Online protocols are commonly text-based, so JSON allows sending/receiving code in an easily, readable format that works
cross-browser. 
### What is an API?
An API is a way to easily request/receive data from third-party servers. 
### What are some limitations of AJAX requests?
AJAX enforces Same Origin Policy, not allowing requests to be made to different hostnames. 
### What is the Same Origin Policy?
Only allowing specific http requests to be made from the same hostname. This allows websites to specifically choose what data it keeps private
and what data the user can see.
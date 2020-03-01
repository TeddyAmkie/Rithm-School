### Conceptual Exercise

Answer the following questions below:

- What are important differences between Python and JavaScript?

1) Differences in what evaluates as truthy/falsy. 
2) JS will assign something not found (such as an index outside of an array or a key that doesnt exist in an object), where Python will throw KeyErrors.
3) Python does not run in a browser, where JS does.
4) Python functionality with files makes it ideal for using for servers.

- Given a dictionary like ``{"a": 1, "b": 2}``: , list two ways you 
  can try to get a missing key (like "c") *without* your programming 
  crashing.
1) You can use .get and pass c as the first argument, and if you want to create the key and allocate a value if it doesn't exist, you can do that in the 2nd parameter.

2) You can use try/except


- What is a unit test?
Unit tests are usually used for testing single functions. They do not care for the project as a whole, and test specific functionality.

- What is an integration test?
Integration tests are for testing several pieces of code together.

- What is the role of web application framework, like Flask?
It listens for requests via http and handles returning the proper response. 

- You can pass information to Flask either as a parameter in a route URL
  (like '/foods/pretzel') or using a URL query param (like
  'foods?type=pretzel'). How might you choose which one is a better fit
  for an application?
The URL is better for categories/groups/general, where a query param is better for specifics/details.
In the example provided there are likely to be a wide variety of foods so it is better in the URL. With at most
few variations of pretzels I would put pretzel in the query string. If it had a flavor/option, add that in the query string as well.
If the site is a pretzel store with many kinds of pretzels each with its own variations, then I would put pretzels in its own route URL. 

- How do you collect data from a URL placeholder parameter using Flask?
You wrap it in <> in the route, and then pass the same variable name into the view function.
- How do you collect data from the query string using Flask?
request.args is a dict-like object that contains all the query parameters you can access inside the view function of the request.
- How do you collect data from the body of the request using Flask?
You use request.key, where key is the key established in the body of the request. For example with a form, you would use request.form by default.
- What is a cookie and what kinds of things are they commonly used for?
A cookie is used to store data of a user's session on a site. Since the website only knows about the specific request it is receiving, a cookie will be
stored in the user's browser and sent with the user's requests back to the server to let it know any information important to the user's session.
Cookies are commonly used for things like login data, so the user would not have to repeatadly login between every page on a website. 
- What is the session object in Flask?
The session object is a built in library in Flask that makes it extremely easy to encrypt cookies. It hides the data of the user's cookies behind a 
server-side key which prevents the user from modifying their cookie. 
- What does Flask's `jsonify()` do?
It turns the arguments of the function into a json-like string.
- What was the hardest part of this past week for you?
With learning so many new tools, it was tough to know which tools to use and when.  
  What was the most interesting?
I really enjoyed learning about sessions and the flow of the web. It's interesting how everyday technologies are used/implemented.
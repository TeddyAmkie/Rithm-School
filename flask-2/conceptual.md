### Conceptual Exercise

Answer the following questions below:

- What is RESTful routing?
RESTful routing follows a strict naming blueprint of /category/[id]/... While small deviations will not disqualify routes from being considered RESTful, sticking to the guideline as close as possible is important. Instead of having to learn new routes, developers can very quickly understand most routes in a new codebase that is RESTful. 
RESTful routing is one of many important RESTful guidelines.

- What is a resource?
The resource comes after the url and is similar to an object. The resource is what the HTTP verb will be acting on. 

- When building a JSON API why do you not include routes to render a form that when submitted creates a new user?
Because a JSON API should always respond with JSON. This allows the API to be flexible and be used for many different applications where we don't know if that form or that route will be usable or even exist. 

- What does idempotent mean? Which HTTP verbs are idempotent?
GET/PUT/PATCH/DELETE are all idempotent because they are repeatable an infinite amount of times while having the same effect on the server as if it was done only once.
POST is not idempotent.

- What is the difference between PUT and PATCH?
PUT updates an entire resource, while PATCH updates part(up to the entire) resource.

- What is one way encryption?
One way encryption means it cannot be reversed. To find out if an output matches an input, the input must be run through the encryption method
and then compared to the original output. There is no possible way to take the output and turn it back into the input.

- What is the purpose of a `salt` when hashing a password?
A salt will require an attacker to have new lookup tables when attempting to brute force a password. It makes the password that much more unpredictable
and difficult to crack.

- What is the purpose of the Bcrypt module?
It's a simple way to salt + hash passwords.

- What is the difference between authorization and authentication?
Authenticating is the process of validating a user and making sure they exist. 
Authorization is when a user attempts to access files that require certain priveledges and checking that user for those priveledges and returns a boolean.
Authorization also handles what to do based on that boolean. 

- What are some ways to manage the complexities of a large codebase, like Warbler?
It would be ignorant for me to comment on a project I have never looked at. 
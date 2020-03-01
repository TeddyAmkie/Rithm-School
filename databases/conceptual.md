### Conceptual Exercise

Answer the following questions below:

- What is PostgreSQL?
It is a relational database management system that uses SQL to interact with it. 

- What is the difference between SQL and PostgreSQL?
SQL is a query language for interacting with databases. PostgreSQL is a database.

- In `psql`, how do you connect to a database?
psql database_name or \c database_name once in psql

- What is the difference between `HAVING` and `WHERE`?
Where is done prior to grouping and decides which rows to keep. Once rows are grouped, having allows you to further sort and choose which grouped items to keep.

- What is the difference between an `INNER` and `OUTER` join?
Inner join returns only items that are included in both tables. Outer join allows for variations of what to keep from which table, even when the other table has a null value for that row.

- What is the difference between a `LEFT OUTER` and `RIGHT OUTER` join?
Left outer includes all the rows from the FROM table, right outer includes all the rows from the JOIN table. 

- What is an ORM? What do they do?
ORM is abstraction to make the driver higher level. It helps prevent SQL injections, and returns more usable data. 

- What are some differences between making HTTP requests using AJAX 
  and from the server side using a library like `requests`?
HTTP requests using AJAX are client-side and are prone to being manipulated by the user. The data is visible, and, changeable in the client.
Server side using requests hides the data from the user, doesn't allow the user to manipulate it, and protects our api key/secret. 
- What is CSRF? What is the purpose of the CSRF token?
CSRF is a cross site attack where data is submitted to a form a different site. A CSRF token makes sure the data the server receives from a form is being input into the form directly on the site. Having the token prevents malicious attackers creating forged requests. It will also keep our jobs.
- What is the purpose of `form.hidden_tag()`?
It's the CSRF token.
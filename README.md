The Newsfeed Application
=================================

This is an application that stores/presents the user feeds 

Prerequisites
-------------

- MySQL (or any standard sql database)
- Java
- Spring (Spring-core,Spring-data)
- Hibernate
- Junit
- Maven
- Angularjs 2
- nodejs
- npm
- gulp and gulp-cli
 
 Running
-------

* Clone the repository https://github.com/m2je/newsfeed.git in your local computer.
* Install MY-SQL (or any other standard SQL database) somewhere and make sure you can connect to it from your server.
* Run the database creation script "Database.sql" on your database. This will create a database schema with name of newsfeed and a table with the name of "feed".
* Update the file "src/test/resources/context.xml" and make sure the "username","password","url" propeties under "<Resource>" tag are properly set to point to your database.
* Run the "run.sh"/"run.bat" file and point your browser to http://localhost:8080   
  
 
 


 
  
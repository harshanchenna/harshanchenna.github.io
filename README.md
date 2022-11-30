# Project 2 Report

## Introduction/Background
For Project 2, we created Map Generator, a website that can generate a random map with a given seed. The seed can either be input from the user or randomly generated. If the user is signed in, they'll also have the option to save the map.

## Motivation, Project Scope, Project Management
**Motivation and Project Scope:**
The main reason we wanted to create a random map generator is that we are all big fans of Minecraft, which is famous for its procedural terrain generation with Perlin noise, so we wanted to work on a project that incorporated pseudo-random noise generation.

**Project Management:**
Jackson (Team Lead) - Provided the rest of the team with boilerplate code for easier development, and helped flesh out and finalize code once initial code was written for frontend and backend. Also wrote unit tests.

Rigved - Worked primarily on backend, set up the database and the logic to query the database for saving and loading map data.

Edward & Harshan - Collaborated on frontend logic, specifically the algorithm for generating the map using a provided seed.

## Literature Review
**Noise Generation Resources:**
https://gamedevelopment.tutsplus.com/tutorials/generate-random-cave-levels-using-cellular-automata--gamedev-9664

http://pcg.wikidot.com/category-pcg-algorithms

https://www.npmjs.com/package/fast-simplex-noise

## Software Technologies
**Frontend Technologies:**
JQuery/HTML/CSS/TypeScript - Used to code frontend logic and display input, buttons, and generated map. Also used to create login for user.

Axios - Used to make API calls to the backend and retrieve responses.

**Backend Technologies:**
Spring Boot (Java 17) w/ Maven - We used the most recent version of Java to give ourselves the most features and extensibility to develop with. We used Spring Boot as framework due to our familiarity with it, and used Maven to download dependencies needed to develop within the framework.

JDBC - Java interface used for communicating with databases.

**Cloud Technologies:**
Google Cloud/Cloud SQL - Familiarity with Google Cloud made it our choice for hosting. We not only used it to host our application, but our backend connects to and queries a database created with Cloud SQL in GCP. This database stores map data for the user.


## Project Lifecycle
Our project followed the waterfall method, as it was the right fit for our ~~procrastination~~ schedules.

## Project Requirements

**User Interfaces:**
Two screens are necessary, one for the login and the other to handle the primary functionality. The first requires a prompt, telling the user to login, and uses Google OAuth to handle authentication. OAuth also provides the UI for providing the username and password. The next screen handles the main functionality of website, with buttons to generate a random seed and to generate a random map. In addition, an input box for displaying a random seed and/or inputting a user random seed is also required.

**Product Functions:**
The product needs to be able to save and load user map data from a database. This will be done through the backend of the product. It also needs to be able to generate a realistic 2D map consisting of pixels representing land and water.

## Design
**Frontend:**
Maps are generated using a randomly-generated or user-provided seed. The seed is fed into a Simplex Perlin noise function that generates an initial map of terrain pixels. The initial map is smoothed through a series of simulation steps: if enough terrain pixels can sustain or spawn new terrain. The final map then portrays realistic continents or islands.

User Interface is left to a minimum, as to not distract from the beautiful, generated map.

**Backend:**
The backend primarily consists of two methods, saveMap() and getMap() (which in turn calls loadMap()). The get/load method creates a connection to a Cloud SQL Server using JDBC and queries it for user map data that is then returned to the frontend. The save method also creates a connection to the same Cloud SQL Server and inserts a row of user data on each call.

## Testing

To perform unit testing, we isolated small portions of functionality and tested them individually using Mockito and JUnit as a form of whitebox testing. To test integration, we manually signed into the website using OAuth, checked the Cloud SQL server to verify user data was being properly saved, and observed that the frontend was displayed properly, indicating that the frontend and backend were successfuly cooperating. For system testing, we manually tested the major functionality of the site, including the user login, seed generation, random map generation, and map saving. Finally, for regression testing, throughout the iteration process, we used the JUnit tests we built along the way to ensure that new funcionality was not negatively affecting past functionality.

## UI

The user is provided with a simple UI containing the name of the application, along with an input box and three buttons. The input box allows the user to input a seed used in the map generation. The user also has an option of using a random seed using the 'Random Seed' button. Once a seed has been entered, the user can hit 'Generate' to generate a map which will be displayed below the buttons. Finally, there is a save button that will allow the user to save data about the map generated. There is also a small window for user authentication provided through the Google API on the top right.
# ThinkStorm - A Quiz Application to Help Build Full Stack Knowledge

## Overview

Hey there! Welcome to ThinkStorm! This is a collaborative project where we use HTML/CSS and JavaScript (Node.js) to design and create a beginner full stack project. This project entails a quiz application which randomly choose questions (currently obtaining questions hard-coded into our js file) and outputs them to the users to answer. Afterwards, the user will get a score of how many they got correct.

With regards to technologies used, we currently have HTML/CSS for the frontend and JavaScript (Node.js) for the backend and for running the server. Alongside this, we have used technologies such as BootStrap and CHATGPT to obtain and refine various portions of the code.

## Features

Our Quiz application currently chooses questions, hard-coded into our game.js file, and each question features a timer for answering them. Additionally, this application also stores users and their scores into local storage that'll show up on the results page.

## How to Access and Run the Server

To access the code, these steps can be used (Note, to access the code VS Code is recommended):

1. On the Github Repository first go under the Code Tab
2. Click on the blue Code button and in the dropdown click on "Download Zip"
3. Once the Zip file downloads, extract all the items from the folder and then run the page!

To run the server on VS Code:

1. Once the contents of the Zip File have been extracted in VS Code
2. Locate the server.js file and run that js file
3. Once it is running, go to your favored browser and type "LocalHost:3500" in the url
4. Then the page should be running!

## Team Contributions/Challenges

Our team is made up of four aspiring computer scientists, and we each had our respective roles in this project.

- Sulaiman Alam: Focused on the home page of the application as well as coding the server.js file. Main challenge faced was trying to code the server.js file in order to show the HTML/CSS and JS of every page and the images (as well as after reorganizing the files into separate folders).
- Paulo Criollo: Focused on the game page of the application and coding the system that randomly chooses questions from the json file for the user to answer.
- Jenny Zheng: Focused on the results page of the application and coding the parts that allowed it to show the specific user's name and score on this page.
- Anjiya Shrestha: Focused on the timer section of the game, making sure the timer is shown and resets on each question and also doing the nav and make sure its works.

## Next Steps

Given that this is only a beginner project, our hope is to in the future expand it even further with new updates. For example, after we get the first version running, next we intend to use Express.js to streamline the process of running the server. Additionally, we hope to remove the usage of hard-coding the random questions in our js file. Rather we will attempt to use an API that has all sorts of random multiple choice questions, so when a user tries a quiz they get even more random questions each time. Furthermore, our hope is to add even more features to future updates of this application, such as adding different difficulty settings for the questions, adding a leaderboard to see the scores of multiple users, possibly organizing by category, or maybe even adding various modes of the quizzes. The possibilities are inherently endless, and we hope this project allows us to dive even deeper into full stack application development and possibly inspires other prospective Computer Science Students to follow suit :D

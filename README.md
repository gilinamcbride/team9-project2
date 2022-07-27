# Out of Office

Do you want to get out of town, but don’t know where to start? One of the best ways to learn more about a new location is to learn from your fellow travelers.

Our traveler friendly application allows users to write about their experiences and read about other users vacations and explorations. Learn about the best pasta in Rome, the most adventurous excursion in Sydney, the toughest trails in Utah, and share your most memorable trips with others.

Looking for a specific destination? Simply search the city you want to learn more about and you will be provided with the blog posts about the specific city, and photos of the city you’re about to explore.

So whether you’re looking to earn frequent flyer miles or add some miles to your car, get Out Of Office.

![out of office](./public/images/app1.png)
![out of office](./public/images/app2.png)

## How to use Out Of Office

When you arrive at the Out Of Office homepage, login or sign up for the blog. Users can write their own blog posts about the destinations they traveled, or search the blog for specific cities they want to explore.

## Launch

- [Click to visit Out Of Office](https://sheltered-cliffs-36049.herokuapp.com/)

## Tech

This application was built with the help of the following languages and APIs:

- HTML
- CSS
- JavaScript
- [Pexel API](https://www.pexels.com/api/)
- Node.js
- Express.js, Express-Session, Express-Handlebars
- Sequelize

## Requirements

**_User Story_**

- **AS A** frequent flier or road tripper
- **I WANT** a searchable travel blog
- **SO THAT** I can learn about new destinations from the people who have experienced them first

**_Acceptance Criteria_**

- **GIVEN** that I've navigated to the Out Of Office application
- **WHEN I** visit the site for the first time
- **THEN I** am presented with the homepage which includes a list of existing blog posts and a navagation header with links
- **WHEN I** click on any other links in the navigation
- **THEN I** am prompted to either log in or sign up
- **WHEN I** choose to sign up
- **THEN I** am prompted to create a username and password
- **WHEN I** click on the sign-up button
- **THEN** my user credentials are saved and I am logged into the site
- **WHEN I** revisit the site at a later time and choose to sign in
- **THEN I** am prompted to enter my username and password
- **WHEN I** am signed in to the site
- **THEN I** see navigation links for the homepage, the dashboard, and the option to log out
- **WHEN I** click on an existing blog post
- **THEN I** am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
- **WHEN I** enter a comment and click on the submit button while signed in
- **THEN I** the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
- **WHEN I** click on the dashboard option in the navigation
- **THEN I** am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
- **WHEN I** click on the button to add a new blog post
- **THEN I** I am prompted to enter both a title and contents for my blog post
- **WHEN I** click on the button to create a new blog post
- **THEN** the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
- **WHEN I** click on one of my existing posts in the dashboard
- **THEN I** am able to delete or update my post and taken back to an updated dashboard
- **WHEN I** search for a city using the search bar in the header
- **THEN I** am presented with blog posts from the city searched and photos of the city
- **WHEN I** click on the logout option in the navigation
- **THEN I** am signed out of the site

**_Future Iterations_**
Moving forward future iterations of the application would include:

- Map features for locations
- Ability to add user photos to blog posts
- Add additional external APIs to provide restaurants, events, hotels, flight information and more for the searched locations
- More specific search features such as searching by features of a city

**_Presentation_**

![presentation](./public/images/presentation.png)

[Link to presentation](https://docs.google.com/presentation/d/12rW1ayBZcqclcOYA0ul7ldq8nQf0B2kWB1YN97NkX4M/edit?usp=sharing)

## Grading Requirements:

- Use Node.js and Express.js to create a RESTful API.
- Use Handlebars.js as the templating engine.
- Use MySQL and the Sequelize ORM for the database.
- Have both GET and POST routes for retrieving and adding new data.
- Be deployed using Heroku (with data).
- Use at least one new library, package, or technology that we haven’t discussed.
- Have a polished UI.
- Be responsive.
- Be interactive (i.e., accept and respond to user input).
- Have a folder structure that meets the MVC paradigm.
- Include authentication (express-session and cookies).
- Protect API keys and sensitive information with environment variables.
- Have a clean repository that meets quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).
- Have a quality README (with unique name, description, technologies used, screenshot, and link to deployed application).

## Presentation Requirements

- **Elevator pitch:** A one-minute description of your application.
- **Concept:** What is your user story? What was your motivation for development?
- **Process:** What were the technologies used? How were tasks and roles broken down and assigned? What challenges did you encounter? What were your successes?
- **Demo:** Show your stuff!
- **Directions** for future development.
- **Links** to the deployed application and the GitHub repository.

## Credits

Thank you to everyone on the team for your contributions!

- [Gilina](https://github.com/gilinamcbride)
- [Daniel](https://github.com/DanielCConlon)
- [Ian](https://github.com/IMLawson)

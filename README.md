# TeaPouch


## Overview

_**TeaPouch** At TeaPouch, we provide the best quality  loose leaf organic teas to create our distinctive collection.  Our passion is to elevate the health and happiness of our customers, one cup at a time.

<br>

## MVP
   - Have a RESTful JSON API
   - Ruby On Rails Server
   - Build a database with at least 3 tables
   - Utilize Rails to define models for interacting with the database.
   - Implement working generic controller actions for Full CRUD for back-end(index, show, create, update, delete) between your non-User tables
   - Build a React App for front-end
   - Have at least 8 separate, rendered components in an organized and understandable React file structure.
   - Use only React for DOM Manipulation.
   - Consume data from my Ruby on Rails API, and render that data in components.
   - Utilize React Router, for client-side routing.
   - Demonstrate full CRUD actions for front-end
   - Be styled with CSS using Flexbox or Grid.
   - Implement 2 media queries for responsive design on 3 screen sizes (including desktop).
   - Deploy the fully functional front-end via Surge or Netlify.
   - Deploy the back-end via Heroku.
    

<br>

### Goals

- Have wireframes, component hierarchy, ERD ready for project approval by Monday October 4, 2021
- Have inital CRUD and authentication done for back-end by end of day Monday October 4, 2021 
- Have full CRUD for front-end done by Tuesday October 5, 2021
- Have initial css styling done by Wednesday October 6, 2021
- Have media queries and  advanced CSS styling done by Thursday October 7, 2021
- Have front-end and back-end deployed, and work on initial PMVP features done by Friday October 8, 2021
- Work on any debugging over the weekend
- Ready for Presentations on Monday October 11, 2021


<br>

### Libraries and Dependencies



|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Render components, utilize state and props, and consume data from Ruby on Rails API |
|   React Router   | utilized for client-side routing |
| Ruby on Rails | utilized for building a server, exposing RESTful JSON endpoints |
|    Rails     | Define models for interacting with the database |
|  Netlify  | fully functional front-end deployment |
| Heroku | used to deploy back-end |


<br>

### Client (Front End)

#### Wireframes



https://www.figma.com/file/3QbrsD3dU9kFfIWKbXLF6S/TeaPouch?node-id=0%3A1

- Wireframe containing schema for project



#### Component Tree



[Component Tree Sample](https://i.imgur.com/V09yg9s.png)

https://whimsical.com/VU5cEVsCJn1stLTjUui29v

#### Component Architecture



``` structure

src

|__ components/
      |__ Header.jsx
|__ containers/
      |__ MainContainer.jsx
|__ layouts/
      |__ Layout.jsx
|__ screens/
      |__ Flavors.jsx
      |__ FoodCreate.jsx
      |__ FoodEdit.jsx
      |__ Foods.jsx
      |__ Login.jsx
      |__ Register.jsx
|__ services/
      |__ auth.js
      |__ config.js
      |__ flavors.js
      |__ foods.js
|__ App.css/
|__ App.js/
|__ index.css/
|__ index.js/
|__ utils/
      

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| READme, ERD, component tree hierarchy    |    H     |     6 hrs      |     6 hrs     |    6 hrs    |
| Wireframes |    H     |     7 hrs      |     7 hrs     |     TBD     |
| Back-end models and controllers   |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
| seeds file  |    H    |     1 hr      |     2 hrs     |    2 hrs    |
| Back-end authorization    |    H     |     4 hrs      |     3 hrs     |    3 hrs    |
| Full CRUD backend and test in Postman    |    H    |     8 hrs      |     8 hrs     |    3 hrs    |
| Sign In form   |    L     |     3 hrs      |     3 hrs     |    3 hrs    |
| Sign Up Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Front-end directory structure setup   |    H     |     3 hrs      |     3 hrs     |    3 hrs    |
| Layout.jsx   |    H     |     1 hrs      |     2 hrs     |    2 hrs    |
| Front-end authorization    |    L     |     3 hrs      |     3 hrs     |    3 hrs    |
| Add Tea Form   |    H     |     3 hrs      |     2 hrs     |    3 hrs    |
| Edit Tea Form    |    H     |     3 hrs      |     2 hrs     |    3 hrs    |
| screens    |    H     |     9 hrs      |     7 hrs     |    7 hrs    |
| services    |    L     |     6 hrs      |     5 hrs     |    5 hrs    |
| css   |    H     |     12 hrs      |     12 hrs     |    12 hrs    |
| media queries   |    H    |     3 hrs      |     3 hrs     |    3 hrs    |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |


> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model



[TeaPouch ERD](https://app.diagrams.net/#G1q9X2zjeT_v-itV8U-oTJ3X1aW1Lbu8md)
<br>

***

## Post-MVP

- Search bar
- Sort function
- favorites list

***

## Code Showcase



## Code Issues & Resolutions



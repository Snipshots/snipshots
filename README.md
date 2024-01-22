# Snipshots

## Setup
1. Add a database link in ./back-end/config/database.js or preferably in an ENV variable.
2. Run ```npm install```
3. Navigate into front-end and run ```npm install```
4. Navigate into back-end and run ```npm install```

5. If you're on Windows, change the following lines in front-end/package.json:
```json
"build": "NODE_ENV=production webpack",
"dev": "NODE_ENV=development webpack serve --open"
```
into:
```json
"build": "cross-env NODE_ENV=production webpack",
"dev": "cross-env NODE_ENV=development webpack serve --open"
```
**Make sure you also ```npm install -g cross-env``` (globally!) to avoid re-installing this package every time. It also prevents adding an unnecessary dependency to your project.**

## Starting the server
1. Navigate into back-end and run ```npm start``` and leave that running.
2. Open a second terminal and run ```npm run build``` and then ```npm run dev```
3. Open http://localhost:3000 to navigate the website.

## About the Frontend 
Here is the heirarchal structure

|-- App
  |-- feed.js
      |-- overview
          |-- snippetCard
      |-- post
      |-- snippet

Most of our frontend uses React and @reduxtoolkitjs. Here is some of the documenentation that we used https://redux-toolkit.js.org/introduction/getting-started.
1. Post.js uses redux 
2. overview + snippetCard uses react. It might be best to translate these components to redux. 

## About the Backend
1. We used MongoDB Atlas for our database and our URI was stored in an env file. Because of this, successors will not have access to the original Database. 
2. You will have to create a new MongoDB Atlas for yourselves and create a .env file inside the backend folder. Assign a variable MONGO_URI in this .env file to your URI (taken from MONGODB). This URI should already include your username, password, and cluster
Should look like this

MONGO_URI=mongodb+srv://<username>:<password>@<cluster-name>.7ux079m.mongodb.net/?retryWrites=true&w=majority

**Notice how variables in .env files do not need declarations!**

## Stretch Goals
1. Turning everything into redux
2. Copy and Paste functionality
3. Create Users
4. Implementing OAuth
5. More tests in TDD

### Welcome to Snipshots!

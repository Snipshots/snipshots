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

### Welcome to Snipshots!

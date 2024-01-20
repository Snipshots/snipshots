const { MongoClient } = require('mongodb');
const path = require('path');
const connectDB = require('./config/database');
const express = require('express');
const app = express();
const PORT = 8080;
const router = require('./routes/index');
// const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.listen(PORT, () => {
//     console.log(`Express Server running on http://localhost:${PORT}`);
// })


// handle requests for static file
app.use(express.static(path.resolve(__dirname, "../somePath")));

// define the route hanlders
app.use('/', router);



// catch-all route handler for any requests to an unknown route
app.use((req, res) =>
  res.status(404).send("No snippets here")
);

//global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });
  
//listening to server
app.listen(PORT, () => {
  console.log('server is running');
});

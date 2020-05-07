const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');

//============================
// CONFIG: Environment Variables
//============================
require('dotenv').config();

//============================
// CONFIG: DB
//============================
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(err => console.log(err));

//============================
// Route Prefixes
//============================
//parse application/json and looks for raw text
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.text());
  app.use(bodyParser.json({type:'application/json'}));
  app.use("/api/", apiRouter);

//============================
// Basic Routing
//============================
const message = {
  message:"Welcome to VUTTR, refer to our documentation at https://github.com/laurajbarros/vuttr_api_node_mongodb to understand how it works"
};
app.get("/", (req, res) => res.json(message));

//============================
// Server listener
//============================
const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
  console.log('API is listening on port', PORT );
});

module.exports = app;

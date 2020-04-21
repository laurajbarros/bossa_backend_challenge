const express = require('express');
const api = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;

//============================
// CONFIG: DB
//============================
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(err => console.log(err));

//============================
// Server listener
//============================
const PORT = process.env.PORT || 3000;
api.listen(PORT, function(){
  console.log('API is listening on port', PORT );
});

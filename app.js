const express = require('express');
const expressLayaouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

const app = express();


// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

// DB Config
const db = require('./config/keys').MongoURI;

// Connect to Mongo
mongoose.connect(db)
  .then((console.log("MongoDB connected...")))
  .catch(err => console.log(err));

//EJS
app.use(expressLayaouts);
app.set('view engine', 'ejs');

// Bodyparser
app.use(express.urlencoded({ extended: false}))




// Youtube(https://www.youtube.com/watch?v=6FOq4cUdH8k&list=PLDyVr91WDyIXSnoTLTVRHsvSwE2jjcYDY&index=1)  39:39
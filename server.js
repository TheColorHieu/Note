// creating our express server
// here we are adding our dependencies
const express = require("express");
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

//setting up the express app 
const app = express();
const PORT = process.env.PORT || 3000;

//setting up the express app to handle data parsing 
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));


//here we are creating the listener so that our app can listen to our response 
app.listen(PORT, function() {
    console.log("App listening on port " + PORT);
});


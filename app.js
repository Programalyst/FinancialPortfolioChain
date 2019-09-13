const express = require('express');
const path = require('path'); //for specifying file paths

const app = express();

//Init Parser middleware
app.use(express.json()); //handles json data in the post request body
app.use(express.urlencoded({extended: false})); //handles URL encoded data

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//set route for apis and the respective js files
app.use('/api/members', require('./routes/api/members'));
app.use('/api/users', require('./routes/api/users'));

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
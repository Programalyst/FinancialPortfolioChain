const express = require('express'); //needs express to function as API
const router = express.Router();
const uuid = require('uuid');

//hardcoded list of users
const users = require('../../UsersData');

//Route for getting all users of the network
router.get('/', (req, res) =>{
    res.json(users);
});

//Getting single user by id
router.get('/:id', (req, res) =>{
    var reqID = parseInt(req.params.id); //params.id is a string
    var found = users.some(user => user.id === reqID); //is the ID provided in the request found? Boolean 

    if (found){
        res.json(users.filter(users => users.id === reqID));
    } else {
        res.status(400).json({ msg: `No user with the id ${req.params.id}`});
    }
    
});

//create new user 
router.post('/', (req, res) =>{
    const newUser ={
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    //check that a name and email is actually provided
    if (!newUser.name || !newUser.email) {
        return res.status(400).json({ msg: 'Please include a name and email'});
    }
    users.push(newUser);
    res.json(users);
});

module.exports = router;
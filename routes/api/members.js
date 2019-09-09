const express = require('express'); //needs express to function as API
const router = express.Router();

//hardcoded list of members
const members = require('../../MembersData');

//Route for getting all members of the network
router.get('/', (req, res) =>{
    res.json(members);
});

//Getting single member by id
router.get('/:id', (req, res) =>{
    var reqID = parseInt(req.params.id); //params.id is a string
    var found = members.some(member => member.id === reqID); //is the ID provided in the request found? Boolean 

    if (found){
        res.json(members.filter(members => members.id === reqID));
    } else {
        res.status(400).json({ msg: `No member with the id ${req.params.id}`});
    }

    
});

module.exports = router;
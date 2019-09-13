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

//connect to the blockchain
const Web3 = require('web3'); // import web3 v1.0 constructor

    if(typeof web3 !== 'undefined'){
        //if a web3 instance is already provided by Meta Mask
        web3Provider = web3.currentProvider;
        web3 = new Web3(web3.currentProvider);
    } else {
        // Specifiy default instance if no web3 instance provided
        web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
        web3 = new Web3(web3Provider);
    }
/*
    var Portfolio = artifacts.require("./Portfolio.sol");

    contract("Portfolio", function(accounts){
        var portfolioInstance;
        
        Portfolio.deployed().then(function(instance){
		    return instance.assetsCount();
	    });
    }
    // Instantiate a new truffle contract from the artifact
    contracts.Portfolio = TruffleContract(portfolio);
    // Connect provider to interact with contract
    contracts.Portfolio.setProvider(web3Provider);
  
*/
    // Load account data
    web3.eth.getCoinbase(function(err, account) {
        if (err === null) {
          console.log("Account = " + account);
        }
    });

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
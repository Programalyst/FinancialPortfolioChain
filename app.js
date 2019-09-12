const express = require('express');
const path = require('path'); //for specifying file paths

const app = express();

const https = require('https');

//Init Parser middleware
app.use(express.json()); //handles json data in the post request body
app.use(express.urlencoded({extended: false})); //handles URL encoded data

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//set route for apis and the respective js files
app.use('/api/members', require('./routes/api/members'));
app.use('/api/users', require('./routes/api/users'));

const PORT = process.env.PORT || 5000;


function getBTCprice() {
	return new Promise((resolve, reject) => {
    
	  // Check the price, then return response after getting the price
      https.get('https://blockchain.info/q/24hrprice', (res) => {
      	let data = '';
        
        // A chunk of data has been recieved.
        res.on('data', (chunk) => {
          data += chunk;
        });
      
        // The whole response has been received. Print out the result.
        res.on('end', () => {
          //console.log("The current price of bitcoin is " + JSON.parse(data) + " USD");
          //agent.add("The current price of bitcoin is " + JSON.parse(data) + " USD");
          resolve("The current price of bitcoin is " + JSON.parse(data) + " USD");
        });
        
      });//https.get   
      
    });//promise
}

getBTCprice().then(function(result){
    console.log(result);
}).catch(function(fromReject){
    console.log(fromReject);
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
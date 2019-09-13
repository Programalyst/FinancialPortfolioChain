const https = require('https');

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
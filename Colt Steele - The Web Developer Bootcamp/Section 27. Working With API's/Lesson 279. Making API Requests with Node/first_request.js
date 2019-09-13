const request = require('request');

let blizzardJSON;

request('http://www.google.com', (error, response, body) => {
    if (error) {
        console.log('Something went wrong!');
        console.log(error);
    } else {
        if (response.statusCode === 200) {
            //THINGS WORKED!
            console.log(body);
        }
    }
})
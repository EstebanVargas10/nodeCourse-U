console.log('Starting App');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var user = os.userInfo();


// var res = notes.addNote();
console.log('Results: ', notes.add(9, -8));

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`, function(err) {
//     if (err){
//         console.log('Unable to write to file :(');
//     }
// });


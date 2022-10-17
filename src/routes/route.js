const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const xyz = require('../logger')
const intro =require('../Logger2/logger3')
const month =require('../util/helper');
const trim =require('../validator/formatter')
const movies =require('../frompair/pair')
//importing external package
const underscore = require('underscore')

router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    //console.log("Calling my function ",xyz.myFunction())
    //console.log("The value of the constant is ",xyz.myUrl)
    //Trying to use an external package called underscore
    //let myArray = ['Akash', 'Pritesh', 'Sabiha']
   // let result = underscore.first(myArray)
   // console.log("The result of underscores examples api is : ", result)
   console.log(intro.welcomeOne());
   console.log(month.finalDMYHours);
   console.log(month.getBatchInfo());
   console.log(trim.functionUp());
   console.log(movies.finalMonth);
   console.log(movies.array2);
   console.log(movies.finallist);

    res.send(month.finalDMYHours);

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;


const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

// router.get('/test-me', function (req, res) {
//     console.log('My batch is', abc.name)
//     abc.printName()
//     res.send('My second ever api!')
// })

// router.get('/students', function (req, res){
//     console.log("The path params in the request are : ", req.params)
//     let students = ['Sabiha', 'Neha', 'Akash']
//     res.send(students)
// })

// Example 1 for path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params
  
    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName)
})
 
// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})

/////////// Probleam No 1
router.get('/movies',function(req,res){
    const inter = ["The-Avengers","Doctor Strange","Spider-Man","Black Panther","Thor"]
   res.send(inter);
 })
 
 ///////// Probleam No 2
router.get('/movies/:box', function (req,res){
   const movie = ["The-Avengers","Doctor Strange","Spider-Man","Black Panther","Thor"]
   const nameOfmovie =req.params.box
   if(nameOfmovie>(movie.length -1)){
    res.send("Inviled Input")
   }else{
   }
res.send(movie[nameOfmovie]);
})


///////// Probleam No 3
router.get('/Film',function(req,res){
  const moviearray =  [ { id: 1,
        name: "The Shining",
       }, 
       { id: 2,
        name: "Incendies",
       },
        { id: 3,
        name: "Rang de Basanti",
       },
        { id: 4,
        name: "Finding Nemo",
       }]
       res.send(moviearray);
})

/////// Probleam No 4

router.get('/Film/:filmid',function(req,res){
    const array1 =req.params.filmid

    const array =  [ { id: 1,
          name: "The Shining",
         }, 
         { id: 2,
          name: "Incendies",
         },
          { id: 3,
          name: "Rang de Basanti",
         },
          { id: 4,
          name: "Finding Nemo",
         }]
         res.send(array[array1]);
  })


module.exports = router;

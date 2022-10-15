const _=require('lodash')


///// problem No. 4
const month = ['January', 'February', 'March', 'April', 'May', 'June', 
        'July', 'August', 'September', 'October', 'November', 'December'];

const finalMonth =_.chunk(month,4);



const array =[ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  
const array2=_.tail(array);



///////  Probleam No. 5

const movies = [["horror", "The Shining"],["drama", "Titanic"],
 ["thriller", "Shutter Island"],["fantasy", "Pans Labyrinth"]];
 
 const finallist =_.fromPairs(movies);

module.exports.finalMonth=finalMonth;
 module.exports.array2=array2;
 module.exports.finallist=finallist;
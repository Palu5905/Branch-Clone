const { count } = require("console")
const bookModel = require("../models/bookModel")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find( {authorName : "HO" } )
    console.log(allBooks)
    if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
    else res.send({msg: "No books found" , condition: false})
}


const updateBooks= async function (req, res) {
    let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
    let allBooks= await BookModel.findOneAndUpdate( 
        { authorName: "ABC"} , //condition
        { $set: data }, //update in data
        { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
     )
     
     res.send( { msg: allBooks})
}

const deleteBooks= async function (req, res) {
    // let data = req.body 
    let allBooks= await BookModel.updateMany( 
        { authorName: "FI"} , //condition
        { $set: {isDeleted: true} }, //update in data
        { new: true } ,
     )
     
     res.send( { msg: allBooks})
}
//////==========================================

const bookdata = async function(req,res){
    let recvidData =req.body
    let saveData = await bookModel.create(recvidData)
    res.send(saveData)

}

const practice =async function(req,res){
  let practiceData = await bookModel.find().populate("author_id")
  res.send(practiceData);
}


const updatee =async function(req,res){
    let Data = await bookModel.find({name:/^pr/})
    res.send(Data);
}
module.exports.updatee=updatee;
module.exports.practice=practice;




const chetanBook= async function (req, res) {
    let array= await bookModel.find({author_name :"Chetan Bhagat"})
    const[obj]=array
    let id =obj.author_id
    
    let allbooks= await bookModel.find({author_id:id})
    res.send({msg: allbooks})
}



const price = async function (req, res) {

    let allbooks= await bookModel.find({ price : { $gte: 50, $lte: 100} })
    let a =[]

    for(i of allbooks){
        let b =await bookModel.findOne({author_id:(i.author_id)}).select({author_name:1,_id:0})
        
         a.push(i)
         a.push(b)
    }
    res.send({msg:a})
}

module.exports.price=price;
module.exports.chetanBook=chetanBook;
module.exports.bookdata=bookdata;




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.updateBooks= updateBooks
module.exports.deleteBooks= deleteBooks

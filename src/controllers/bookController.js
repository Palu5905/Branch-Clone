
const bookModel= require("../models/bookModel")
const authorMod= require("../models/publisherModel")


const createBook= async function (req, res) {
    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find().select({_id:0})
    res.send({data: books})
}


const AllDate = async function (req, res) {
    let Books= req.body
    let authorId = Books.author_id
    let publicId = Books.publisher_id
    if(( await bookModel.findOne({_id:authorId}))&&(await authorId.findOne({_id:publicId}))){
        bookcreated= await bookModel.create(Book)
        return res.send({data:Books})
    }
    else{
         res.send({data:"Send valid id"})
    }
    
}



const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('publisher_id').populate('author_id').select({_id:0})
    res.send({data: specificBook})

}









module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.AllDate=AllDate
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails


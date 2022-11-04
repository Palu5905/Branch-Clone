const express = require('express');
const router = express.Router();
const UserController = require("../controllers/userController")
const BookController = require("../controllers/bookController")
const commonMW = require("../middlewares/commonMiddlewares")



///////========================================================


const finalUserData = require("../controllers/userSchCOn")
const finalProducatData = require("../controllers/productController")
const finalorderData = require("../controllers/orderController")

router.post("/producat-Data", finalProducatData.product)
router.post("/order-Data", commonMW.MyMiddleware, finalorderData.orderRE)
router.post("/user-Data", commonMW.MyMiddleware, finalUserData.userAPI)
router.post("/user-producat",commonMW.MyMiddleware, finalorderData.orderData)



router.get("/Final-AllData", finalorderData.orderAPI)












router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//Can we set the 'next' input parameter in a route handler?
//What is the primary difference between a middleware and a route handler?
router.post("/createBook", commonMW.myMiddleware, BookController.createBook, function (req, res, next) {
    res.send("Ending the cycle")
})

router.post("/createUser", commonMW.myMiddleware, UserController.createUser)

router.get("/dummy1", commonMW.myOtherMiddleware, UserController.dummyOne)

router.get("/dummy2", commonMW.myOtherMiddleware, UserController.dummyTwo)

router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)

module.exports = router;
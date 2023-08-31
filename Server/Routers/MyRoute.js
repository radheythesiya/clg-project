const express = require("express");
const Router = express.Router();
// USER
const { LoginCotrol, RegisterControl, GetUserData, deleteUser } = require("../Controls/User");
// ADMIN
const AdminControl = require("../Controls/Admin")
// PRODUCT
const { AddProductData, GetProductData, deleteProduct } = require("../Controls/ProductData")
// FEEDBACK
const { addFeedback, getFeedback,deleteFeedback } = require('../Controls/Feedback')
//CART
const addToCart = require("../Controls/Cart")

const {OderDetail,report,getOrderDetail,DeleteOrder} = require("../Controls/Order")
const AuthUser = require("../middleware/AuthUser")
// ----------------ROUTES-----------------


// USER
Router.route("/register").post(RegisterControl)
Router.route("/login").post(LoginCotrol)
Router.route("/user").get(GetUserData)
Router.route("/user/:id").delete(deleteUser)


// ADMIN  
Router.route("/adminlogin").post(AdminControl)

// PRODUCT DATA 
Router.route("/product").post(AddProductData)
Router.route("/product").get(GetProductData)
Router.route("/product/:id").delete(deleteProduct)

Router.route("/v1/product").get(GetProductData)
Router.route("/v1/product/:id").delete(deleteProduct)

// FEEDBACK 
Router.route("/feedback").post(addFeedback);
Router.route("/feedback").get(getFeedback);
Router.route("/feedback/:id").delete(deleteFeedback);


//CART

Router.route("/addtocart/:id").post(addToCart)

// Order
Router.route("/order").post(AuthUser,OderDetail,report)
Router.route("/order").get(getOrderDetail)
Router.route("/order/:_id").delete(DeleteOrder)

module.exports = Router;    

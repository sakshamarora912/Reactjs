const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// database connection with MonogoDb
mongoose.connect("mongodb+srv://sakshamarora9120:hello1234@cluster0.zsuc6j3.mongodb.net/Ecommerce")

// API creation
app.get("",(req,res)=>{
    res.send("Express App is Running")
})

//Image Storage Engin
const storage = multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload=multer({storage:storage});

//creating upload Endpoint for images
app.use('/images',express.static('upload/images'))
app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

//schema for creating product
const Product = mongoose.model("Product",{
    id:{type:Number,require:true},
    name:{type:String,require:true},
    image:{type:String,require:true},
    category:{type:String,require:true},
    new_price:{type:String,require:true},
    old_price:{type:String,require:true},
    date:{type:Date,default:Date.now},
    available:{type:Boolean,default:true},
})

app.post('/addproduct',async(req,res)=>{
    let products=await Product.find({});
    let new_id=0;
    if(products.length>0){
        let last_products_array=products.slice(-1);
        let last_product=last_products_array[0];
        new_id=last_product.id+1;
    }
    else{
        new_id=1;
    }
    console.log(new_id);
    const product=new Product({
        id:new_id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log("saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})

// Creating API FOR deleting Products
app.post('/removeproduct',async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("removed");
    res.json({
        success:true,
        name:req.body.name,
    })
})

// Creating API for getting all products
app.get('/allproducts',async(req,res)=>{
    let products=await Product.find({});
    console.log("All Products Fetched");
    res.send(products)
    });

//schema for users
const Users = mongoose.model('Users',{
    name:{type:String},
    email:{type:String,unique:true},
    password:{type:String},
    cartData:{type:Object},
    date:{type:Date,default:Date.now},
})

//creating endpoint for registering new users
app.post('/signup',async(req,res)=>{
    let check = await Users.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success:false,errors:"existing user found email"})
    }
    let cart ={};
    for (let i = 0; i < 300; i++) {
        cart[i]=0;
    }
    const user = new Users({
    name:req.body.username,
    email:req.body.email,
    password:req.body.password,
    cartData:cart,
    })
    await user.save();

    const data={
        user:{id:user.id}
    }
    const token = jwt.sign(data,'secret_ecom');
    res.json({success:true,token})
})

//creating endpoint for user login
app.post('/login',async(req,res)=>{
    let user = await Users.findOne({email:req.body.email});
    if(user){
        const passCompare=req.body.password===user.password;
        if(passCompare){
            const data={
                user:{id:user.id}
            }
        const token = jwt.sign(data,'secret_ecom');
        res.json({success:true,token});
        }
        else{
            res.json({success:false,errors:"wrong password"})
        }
    }
    else{res.json({success:false,errors:"wrong email"})};
})
app.get('/newcollections',async(req,res)=>{
    let products=await Product.find({});
    let newcollection=products.slice(1);
    console.log("new Collection Fetched");
    res.send(newcollection);
})

app.get('/poularinwomen',async(req,res)=>{
    let products=await Product.find({category:"women"});
    let popular_in_women=products.slice(0,4);
    console.log("popular in women");
    res.send(popular_in_women);
})

// creating middleware to fetch user
const fetchUser = async (req,res,next)=>{
    const token=req.header('auth-token');
    if(!token){
        req.status(401).send({errors:"Please authenticate"});
    }
    else{
        try{
             const data=jwt.verify(token,'secret_ecom');
             req.user = data.user;
             next()
        }catch(error){
            req.status(401).send({errors:"Please authenticate"});
        }  
}}

app.post('/addtocart',fetchUser,async(req,res)=>{
    console.log("Added",req.body.itemId);
    let userData=await Users.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Added")
})
app.post('/removefromcart',fetchUser,async(req,res)=>{
    console.log("removed",req.body.itemId);
    let userData=await Users.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId]>0){
        userData.cartData[req.body.itemId]-=1;
        await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
        res.send("Removed")
    }
})

app.post('/getcart',fetchUser,async (req,res)=>{
    console.log('Get Cart');
    let userData=await Users.findOne({_id:req.user.id});
    res.json(userData.cartData);
})

app.listen(port,(error)=>{
    if(!error){console.log("Server Running on Port"+port)}
    else{console.log("Error:error")}
})

const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://sakshamarora9120:hello1234@cluster0.zsuc6j3.mongodb.net/Ecommerce")

app.get("",(req,res)=>{
    res.send("Express App is Running")
})

const Product = mongoose.model("Product",{
    id:{type:Number,require:true},
    name:{type:String,require:true},
    category:{type:String,require:true},
    new_price:{type:String,require:true},
    old_price:{type:String,require:true},
    date:{type:Date,require:Date.now,require:true},
    available:{type:Boolean,require:true},
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

app.listen(port,(error)=>{
    if(!error){console.log("Server Running on Port"+port)}
    else{console.log("Error:error")}
})

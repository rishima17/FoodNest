import userModel from "../models/userModel.js"

//add items to user cart
const AddToCart= async(req,res)=>{
try {
    // find user by id
    let userData = await userModel.findOne({ _id: req.body.userId });
    let cartData = userData.cartData;

    // check if item already in cart
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;   // add new item
    } else {
      cartData[req.body.itemId] += 1;  // increment quantity
    }

    // update user cart
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
     res.json({success:true,message:"Added to Cart"})

}catch(err){
    console.log(err)
    res.json({success:false,message:"ERROR !"})
}
}
//remove items from user cart
const RemoveFromCart= async(req,res)=>{
    try{
       let userData=await userModel.findById(req.body.userId);
       let cartData=await userData.cartData;
       if(cartData[req.body.itemId]>0){
        cartData[req.body.itemId]-=1;


       }
       await userModel.findByIdAndUpdate(req.body.userId,{cartData});
       res.json({success:true,message:"Removed From Cart "})
    }
    catch(err){
        console.log(err);
        res.json({success:false,message:"Error"})
    }
}

//fetch items from user cart
const GetCart= async(req,res)=>{
    try{
        let userData=await userModel.findById(req.body.userId);
        let cartData=await userData.cartData;
        res.json({success:true,cartData})
    }
    catch(err){
        console.log(err);
        res,json({success:false,message:"Error"})
    }

}
export{AddToCart,RemoveFromCart,GetCart}
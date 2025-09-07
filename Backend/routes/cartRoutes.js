import express from "express"
import { AddToCart,RemoveFromCart,GetCart } from "../controllers/cartController.js"
import { authMiddleware } from "../middlewares/auth.js";
const CartRouter=express.Router();

CartRouter.post("/add",authMiddleware ,AddToCart)

CartRouter.post("/remove",authMiddleware ,RemoveFromCart)

CartRouter.post("/get",authMiddleware ,GetCart)

export default CartRouter;
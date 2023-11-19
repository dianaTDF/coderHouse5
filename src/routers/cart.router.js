import { Router } from "express";
import { getController,postController } from "../controllers/cart.controller.js";

export const cartRouter= Router()

cartRouter.get('/:cid', getController)
cartRouter.post('/', postController)
cartRouter.post('/:cid/products/:pid', postController)



import { postsController } from "../Controllers/posts.controller.js";
import { Router } from "express";

export const postsRouter = Router();

postsRouter.post("/", postsController.postposts);
postsRouter.getAll("/", postsController.getAllposts);
postsRouter.getById("/:id", postsController.getByIdposts);
postsRouter.put("/:id", postsController.putposts);
postsRouter.delete("/:id", postsController.deleteposts);
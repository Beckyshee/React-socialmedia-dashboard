import { Router } from "express";
import { createNewPost, getAlPosts } from "../controllers/postController.js";

const postRouter = Router();

postRouter.post( "/", createNewPost );
postRouter.get("/all/", getAlPosts);

;

export default  postRouter
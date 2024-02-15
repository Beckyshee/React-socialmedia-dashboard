import { postSchema, postValidator } from "../validators/postValidator.js";
import { v4 } from "uuid";
import {
  sendBadRequest,
  sendCreated,
  sendNotFound,
  sendServerError,
  handleUpdateFailure,
} from "../helper/helperFunction.js";
import { addPost, getAllPostsService } from "../services/postService.js";

export const createNewPost = async (req, res) => {
  // Validate post data
    const PostID = v4()
  try {
    const { UserID, Content } = req.body;
    console.log(req.body);
    const { error } = postValidator({
      UserID,
      Content,
    });
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

      const newPost = {
        PostID,
        UserID,
        Content       
      };
    console.log("post", newPost);
    // Call service function to add post to the database
    const response = await addPost(newPost);
    console.log("res", response);
    if (response instanceof Error) {
      throw response;
    }

    // Check if insertion was successful
    if (response.rowsAffected && response.rowsAffected[0] === 1) {
      sendCreated(res, "Post created successfully");
    } else {
      sendServerError(res, "Failed to create Post");
    }
  } catch (error) {
    sendServerError(res, error.message);
  }
};


 export const getAlPosts = async (req, res) => {
   try {
     const posts = await getAllPostsService();
     //  console.log(users);

     if (posts.length > 0) {
       return res.status(200).json(posts);
     } else {
       return res.status(404).json({ error: "No posts found" });
     }
   } catch (error) {
     sendServerError(res, error.message);
   }
 }; 
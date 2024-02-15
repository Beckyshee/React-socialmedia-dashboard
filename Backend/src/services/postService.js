import { poolRequest, sql } from "../utils/dbConnect.js";

export const addPost = async (newPost) => {
  try {
    const result = await poolRequest()
      .input("PostID", sql.VarChar(255), newPost.PostID)
      .input("UserID", sql.VarChar(255), newPost.UserID)
      .input("Content", sql.VarChar(255), newPost.Content)

      .query(
        "INSERT INTO Post (PostID,UserID, Content) VALUES (@PostID,@UserID, @Content)"
      );
    console.log("result", result);
    return result;
  } catch (error) {
    return error;
  }
};


export const getAllPostsService = async () => {
  try {
    const result = await poolRequest().query("SELECT * FROM Post");
    return result.recordset;
  } catch (error) {
    throw error;
  }
};

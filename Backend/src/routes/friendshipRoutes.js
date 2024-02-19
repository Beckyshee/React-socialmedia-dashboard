import { Router } from "express";
import {
  createNewFriendship,
  deleteFriendship,
  getAllFriendships,
  getSingleFriendship,
  updateFriendship,
} from "../controllers/friendshipController.js";

const friendshipRouter = Router();

friendshipRouter.post("/", createNewFriendship);
friendshipRouter.get("/allfriends", getAllFriendships);
friendshipRouter.get("/:FriendshipID", getSingleFriendship);
friendshipRouter.put("/update/:FriendshipID", updateFriendship);
friendshipRouter.delete("/delete/:FriendshipID", deleteFriendship);

export default friendshipRouter;

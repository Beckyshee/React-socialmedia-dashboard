import { Router } from "express";
import {
  createNewMessage,
  deleteMessage,
  getAllMessages,
  getSingleMessage,
  updateMessage,
} from "../controllers/messageController.js";

const messageRouter = Router();

messageRouter.post("/", createNewMessage);
messageRouter.get("/allmessages", getAllMessages);
messageRouter.put("/update/:MessageID", updateMessage);
messageRouter.delete("/delete/:MessageID", deleteMessage);
messageRouter.get("/:MessageID", getSingleMessage);

export default messageRouter;

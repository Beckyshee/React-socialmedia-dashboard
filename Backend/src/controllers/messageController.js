import { messageValidator } from "../validators/messageValidators.js";
import { v4 } from "uuid";
import {
  sendBadRequest,
  sendCreated,
  sendNotFound,
  sendServerError,
  handleUpdateFailure,
} from "../helper/helperFunction.js";
import {
  addMessageService,
  updateMessageService,
  deleteMessageService,
  getAllMessagesService,
  getMessageByIDService,
} from "../services/messageServices.js";

export const createNewMessage = async (req, res) => {
  try {
    const { SenderID, ReceiverID, MessageDate, Content } = req.body;

    const MessageID = v4();

    const { error } = messageValidator({
      SenderID,
      ReceiverID,
      MessageDate,
      Content,
    });

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const newMessage = {
      MessageID,
      SenderID,
      ReceiverID,
      MessageDate,
      Content,
    };

    const response = await addMessageService(newMessage);

    if (response instanceof Error) {
      throw response;
    }

    if (response.rowsAffected && response.rowsAffected[0] === 1) {
      sendCreated(res, "Message created successfully");
    } else {
      sendServerError(res, "Failed to create Message");
    }
  } catch (error) {
    sendServerError(res, error.message);
  }
};

export const getAllMessages = async (req, res) => {
  try {
    const messages = await getAllMessagesService();

    if (messages.length > 0) {
      return res.status(200).json(messages);
    } else {
      return res.status(404).json({ error: "No messages found" });
    }
  } catch (error) {
    sendServerError(res, error.message);
  }
};

export const getSingleMessage = async (req, res) => {
  try {
    const MessageID = req.params.MessageID;
    const message = await getMessageByIDService(MessageID);

    if (message) {
      return res.status(200).json(message);
    } else {
      return res.status(404).json({ error: "Message not found" });
    }
  } catch (error) {
    sendServerError(res, error.message);
  }
};

export const updateMessage = async (req, res) => {
  try {
    const { MessageID } = req.params;
    console.log("request body ", req.body);
    const messageUpdated = req.body;
    messageUpdated.MessageID = MessageID;

    const updated = await updateMessageService(messageUpdated);
    console.log(updated);
    if (updated[0] > 0) {
      return res.status(200).json({
        messageUpdated: req.body,
        message: "Message Updated Successfully",
      });
    } else {
      return handleUpdateFailure(res, "Update failed");
    }
  } catch ( error )
  {
    console.log("error is ", error);
    sendServerError(res, error.message);
  }
};

export const deleteMessage = async (req, res) => {
  try {
    const MessageID = req.params.MessageID;
    const isDeleted = await deleteMessageService(MessageID);

    if (isDeleted) {
      res.status(200).json({ message: "Message deleted successfully" });
    } else {
      res.status(404).json({ error: "Deletion failed" });
    }
  } catch (error) {
    sendServerError(res, error.message);
  }
};

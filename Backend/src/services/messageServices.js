import { poolRequest, sql } from "../utils/dbConnect.js";

export const addMessageService = async (newMessage) => {
  try {
    const result = await poolRequest()
      .input("MessageID", sql.VarChar(255), newMessage.MessageID)
      .input("SenderID", sql.VarChar(255), newMessage.SenderID)
      .input("ReceiverID", sql.VarChar(255), newMessage.ReceiverID)
      .input("MessageDate", sql.DateTime, newMessage.MessageDate)
      .input("Content", sql.Text, newMessage.Content)
      .query(
        "INSERT INTO Message (MessageID, SenderID, ReceiverID, MessageDate, Content) VALUES (@MessageID, @SenderID, @ReceiverID, @MessageDate, @Content)"
      );
    console.log("result", result);
    return result;
  } catch (error) {
    return error;
  }
};

export const getAllMessagesService = async () => {
  try {
    const result = await poolRequest().query("SELECT * FROM Message");
    return result.recordset;
  } catch (error) {
    throw error;
  }
};

export const getMessageByIDService = async (MessageID) => {
  try {
    const result = await poolRequest()
      .input("MessageID", sql.VarChar(255), MessageID)
      .query("SELECT * FROM Message WHERE MessageID = @MessageID");
    return result.recordset[0];
  } catch (error) {
    throw error;
  }
};

export const updateMessageService = async (updatedMessage) => {
  try {
    console.log("updated service param is ", updatedMessage);
    const result = await poolRequest()
      .input("MessageID", sql.VarChar(255), updatedMessage.MessageID)
      .input("SenderID", sql.VarChar(255), updatedMessage.SenderID)
      .input("ReceiverID", sql.VarChar(255), updatedMessage.ReceiverID)
      .input("MessageDate", sql.DateTime, updatedMessage.MessageDate)
      .input("Content", sql.Text, updatedMessage.Content)
      .query(
        `UPDATE Message SET SenderID = @SenderID, ReceiverID = @ReceiverID, MessageDate = @MessageDate, Content = @Content WHERE MessageID = @MessageID`
      );
    console.log("result is ", result);
    return result.rowsAffected;
  } catch (error) {
    console.log("error ", error);
    return error;
  }
};

export const deleteMessageService = async (MessageID) => {
  try {
    console.log("message id in service is ", MessageID);
    const result = await poolRequest()
      .input("MessageID", sql.VarChar(255), MessageID)
      .query("DELETE FROM Message WHERE MessageID = @MessageID");

    return result.rowsAffected[0] > 0;
  } catch (error) {
    throw error;
  }
};

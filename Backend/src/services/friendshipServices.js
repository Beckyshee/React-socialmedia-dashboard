import { poolRequest, sql } from "../utils/dbConnect.js";

export const addFriendshipService = async (newFriendship) => {
  try {
    const result = await poolRequest()
      .input("FriendshipID", sql.VarChar(255), newFriendship.FriendshipID)
      .input("User1ID", sql.VarChar(255), newFriendship.User1ID)
      .input("User2ID", sql.VarChar(255), newFriendship.User2ID)
      .input("FriendshipDate", sql.DateTime, newFriendship.FriendshipDate)
      .query(
        "INSERT INTO Friendship (FriendshipID, User1ID, User2ID, FriendshipDate) VALUES (@FriendshipID, @User1ID, @User2ID, @FriendshipDate)"
      );
    console.log("result", result);
    return result;
  } catch (error) {
    return error;
  }
};

export const getAllFriendshipsService = async () => {
  try {
    const result = await poolRequest().query("SELECT * FROM Friendship");
    return result.recordset;
  } catch (error) {
    throw error;
  }
};

export const getFriendshipByIDService = async (FriendshipID) => {
  try {
    const result = await poolRequest()
      .input("FriendshipID", sql.VarChar(255), FriendshipID)
      .query("SELECT * FROM Friendship WHERE FriendshipID = @FriendshipID");
    return result.recordset[0];
  } catch (error) {
    throw error;
  }
};

export const updateFriendshipService = async (updatedFriendship) => {
  try {
    console.log("updated service param is ", updatedFriendship);
    const result = await poolRequest()
      .input("FriendshipID", sql.VarChar(255), updatedFriendship.FriendshipID)
      .input("User1ID", sql.VarChar(255), updatedFriendship.User1ID)
      .input("User2ID", sql.VarChar(255), updatedFriendship.User2ID)
      .input("FriendshipDate", sql.DateTime, updatedFriendship.FriendshipDate)
      .query(
        `UPDATE Friendship SET User1ID = @User1ID, User2ID = @User2ID, FriendshipDate = @FriendshipDate WHERE FriendshipID = @FriendshipID`
      );
    console.log("result is ", result);
    return result.rowsAffected;
  } catch (error) {
    console.log("error ", error);
    return error;
  }
};

export const deleteFriendshipService = async (FriendshipID) => {
  try {
    console.log("friendship id in service is ", FriendshipID);
    const result = await poolRequest()
      .input("FriendshipID", sql.VarChar(255), FriendshipID)
      .query("DELETE FROM Friendship WHERE FriendshipID = @FriendshipID");

    return result.rowsAffected[0] > 0;
  } catch (error) {
    throw error;
  }
};

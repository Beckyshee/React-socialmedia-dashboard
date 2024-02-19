import { poolRequest, sql } from "../utils/dbConnect.js";

export const addPhotoService = async (photo) => {
  try {
    const result = await poolRequest()
      .input("PhotoID", sql.VarChar(255), photo.PhotoID)
      .input("UserID", sql.VarChar(255), photo.UserID)
      .input("PhotoURL", sql.VarChar(255), photo.PhotoURL)
      .input("UploadDate", sql.DateTime, photo.UploadDate)
      .query(
        "INSERT INTO Photo (PhotoID, UserID, PhotoURL, UploadDate) VALUES (@PhotoID, @UserID, @PhotoURL, @UploadDate)"
      );
    return result;
  } catch (error) {
    throw error;
  }
};

export const getPhotoByIDService = async (photoID) => {
  try {
    const result = await poolRequest()
      .input("PhotoID", sql.VarChar(255), photoID)
      .query("SELECT * FROM Photo WHERE PhotoID = @PhotoID");
    return result.recordset[0];
  } catch (error) {
    throw error;
  }
};

export const getAllPhotosService = async () => {
  try {
    const result = await poolRequest().query("SELECT * FROM Photo");
    return result.recordset;
  } catch (error) {
    throw error;
  }
};

export const updatePhotoService = async (updatedPhoto) => {
  try {
    const result = await poolRequest()
      .input("PhotoID", sql.VarChar(255), updatedPhoto.PhotoID)
      .input("PhotoURL", sql.VarChar(255), updatedPhoto.PhotoURL)
      .input("UploadDate", sql.DateTime, updatedPhoto.UploadDate)
      .query(
        "UPDATE Photo SET PhotoURL = @PhotoURL, UploadDate = @UploadDate WHERE PhotoID = @PhotoID"
      );
    return result.rowsAffected;
  } catch (error) {
    throw error;
  }
};

export const deletePhotoService = async (photoID) => {
  try {
    const result = await poolRequest()
      .input("PhotoID", sql.VarChar(255), photoID)
      .query("DELETE FROM Photo WHERE PhotoID = @PhotoID");
    return result.rowsAffected[0] > 0;
  } catch (error) {
    throw error;
  }
};

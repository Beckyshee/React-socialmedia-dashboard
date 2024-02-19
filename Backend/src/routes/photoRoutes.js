import { Router } from "express";
import {
  addPhoto,
  getAllPhotos,
  getPhotoByID,
  updatePhoto,
  deletePhoto,
} from "../controllers/photoController.js";

const photoRouter = Router();

photoRouter.post("/", addPhoto);
photoRouter.get("/allphotos", getAllPhotos);
photoRouter.get("/:PhotoID", getPhotoByID);
photoRouter.put("/update/:PhotoID", updatePhoto);
photoRouter.delete("/delete/:PhotoID", deletePhoto);

export default photoRouter;

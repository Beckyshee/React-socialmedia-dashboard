import { friendshipValidator } from "../validators/friendshipValidator.js";
import { v4 } from "uuid";
import {
  sendBadRequest,
  sendCreated,
  sendNotFound,
  sendServerError,
  handleUpdateFailure,
} from "../helper/helperFunction.js";
import {
  addFriendshipService,
  getAllFriendshipsService,
  getFriendshipByIDService,
  updateFriendshipService,
  deleteFriendshipService,
} from "../services/friendshipServices.js";

export const createNewFriendship = async (req, res) => {
  try {
    const { User1ID, User2ID, FriendshipDate } = req.body;

    const FriendshipID = v4();

    const { error } = friendshipValidator({
      FriendshipDate,
    });

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const newFriendship = {
      FriendshipID,
      User1ID,
      User2ID,
      FriendshipDate,
    };

    const response = await addFriendshipService(newFriendship);

    if (response instanceof Error) {
      throw response;
    }

    if (response.rowsAffected && response.rowsAffected[0] === 1) {
      sendCreated(res, "Friendship created successfully");
    } else {
      sendServerError(res, "Failed to create Friendship");
    }
  } catch (error) {
    sendServerError(res, error.message);
  }
};

export const getAllFriendships = async (req, res) => {
  try {
    const friendships = await getAllFriendshipsService();

    if (friendships.length > 0) {
      return res.status(200).json(friendships);
    } else {
      return res.status(404).json({ error: "No friendships found" });
    }
  } catch (error) {
    sendServerError(res, error.message);
  }
};

export const getSingleFriendship = async (req, res) => {
  try {
    const FriendshipID = req.params.FriendshipID;
    const friendship = await getFriendshipByIDService(FriendshipID);

    if (friendship) {
      return res.status(200).json(friendship);
    } else {
      return res.status(404).json({ error: "Friendship not found" });
    }
  } catch (error) {
    sendServerError(res, error.message);
  }
};

export const updateFriendship = async (req, res) => {
  try {
    const { FriendshipID } = req.params;

    const FriendshipUpdated = req.body;
    FriendshipUpdated.FriendshipID = FriendshipID;
    const updated = await updateFriendshipService(FriendshipUpdated);

    if (updated[0] > 0) {
      return res.status(200).json({
        friendshipUpdated: req.body,
        message: "Friendship Updated Successfully",
      });
    } else {
      return handleUpdateFailure(res, "Update failed");
    }
  } catch (error) {
    sendServerError(res, error.message);
  }
};

export const deleteFriendship = async (req, res) => {
  try {
    console.log(req.params);
    const FriendshipID = req.params.FriendshipID;
    const isDeleted = await deleteFriendshipService(FriendshipID);

    if (isDeleted) {
      res.status(200).json({ message: "Friendship deleted successfully" });
    } else {
      res.status(404).json({ error: "Deletion failed" });
    }
  } catch (error) {
    sendServerError(res, error.message);
  }
};

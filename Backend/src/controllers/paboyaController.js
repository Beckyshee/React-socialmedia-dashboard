

// import { userValidator } from "../validators/userValidators.js";
// // import { createUserService } from "../services/userService.js";
// import bcrypt from 'bcrypt'
// import { sendCreated, sendServerError } from "../helper/helperFunction.js";

// export const createUserController = async (req, res) => {
//   try {
//     const { Username, Password, Email, TagName, Location } = req.body; // Assuming the data is coming from the request body

//     // Validate user input
//     const { error } = userValidator({
//       Username,
//       Password,
//       Email,
//       TagName,
//       Location,
//     });
//     if (error) {
//       return res.status(400).send(error.details[0].message);
//     }

//     // Hash the password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(Password, salt);

//     // Create new user object with hashed password
//     const newUser = { Username, Password: hashedPassword, Email };

//     // Add user to the database
//     const response = await addUserService(newUser);

//     // Check for errors in adding user
//     if (response.message) {
//       sendServerError(res, response.message);
//     } else {
//       sendCreated(res, "User created successfully");
//     }
//   } catch (error) {
//     sendServerError(res, error.message);
//   }
// };

// export const registerUser = async (req, res) => {
//   const { Username, Password, Email, TagName, Location } = req.body;
//   const { error } = userValidator({ Username, Password, Email, TagName, Location });
//   if (error) {
//     return res.status(400).send(error.details[0].message);
//   } else {
//     try {
//       const salt = await bcrypt.genSalt(10);
//       const hashedPassword = await bcrypt.hash(Password, salt);
//       const newUser = { Username, Password: hashedPassword, Email };
//       const response = await addUserService(newUser);
//       if (response.message) {
//         sendServerError(res, response.message);
//       } else {
//         sendCreated(res, "User created successfully");
//       }
//     } catch (error) {
//       sendServerError(res, error.message);
//     }
//   }
// };

export const registerUser = async (req, res) => {
  const { Username, Password, Email, TagName, Location } = req.body;
  console.log(Username);

  console.log(req.body);
  const { error } = userValidator({
    Username,
    Password,
    Email,
    TagName,
    Location,
  });
  if (error) {
    return res.status(400).send(error.details[0].message);
  } else {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(Password, salt);
      const result = await addUserService({
        UserID,
        Username,
        Password: hashedPassword,
        Email,
        TagName,
        Location,
      });
      if (result.message) {
        sendServerError(res, result.message);
      } else {
        sendCreated(res, "User Created Successfully");
      }
    } catch (error) {
      sendServerError(res, error.message);
    }
  }
};

// export const loginUser = async (req, res) => {
//   try {
//   } catch (error) {}
// };

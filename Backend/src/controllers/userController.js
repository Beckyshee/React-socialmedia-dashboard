import { addUserServices, findByCredentialServices } from "../services/userService";
import { userValidator } from "../validators/userValidator.js";
import bcrypt from 'bcrypt'


export const registerUser = async ( req, res ) =>
{ 
    const {username,password, email}
        = req.body;
    const { error } = userValidator( { username, password, email } );
    if ( error )
    {
        return res.status( 400 ).send( error.details[ 0 ].message );
    } else
    {
        try {
             const salt = await bcrypt.genSalt(10);
             const hashedPassword = await bcrypt.hash(password, salt);
             const newUser = { username, password: hashedPassword, email };
             const response = await addUserServices(newUser);
             if (response.message) {
               return res.status(500).send(response.message);
             } else {
               sendCreated(res, "created successfully");
             }
        } catch (error) {
            
        }
    }
};

export const loginUser = async ( req, res ) =>
{
    const { username, password } = req.body;
     const { error } = userLoginValidator({ username, password });
     if (error) {
       return res.status(400).send(error.details[0].message);
     } else {
       try {
         const salt = await bcrypt.genSalt(10);
         const hashedPassword = await bcrypt.hash(password, salt);
         const newUser = { username, password: hashedPassword, email };
         const response = await addUserServices(newUser);
         if (response.message) {
           return res.status(500).send(response.message);
         } else {
           sendCreated(res, "created successfully");
         }
       } catch (error) {}
     }
};
import addUserServices from '../services/userService.js'
import { poolRequest, sql } from '../utils/dbConfig.js'
import dotenv from 'dotenv'


export const addUserServices = async ( newUser ) =>
{
    try {
        const result = await poolRequest()
          .input("username", sql.Varchar, newUser.username)
          .input("password", sql.Varchar, password.username)
          .input("email", sql.Varchar, email.username);  
    } catch (error) {
        
    }
 };
export const findByCredentialServices = async ( username, password ) =>
{
    try {
        //if user exists
        const userFoundResponse = await poolRequest()
          .input("username", sql.Varchar, user.username)
            .query( 'SELECT * FROM tbl_user WHERE Uuername =@username' );
        if ( userFoundResponse.recordset[ 0 ] )
        {
            if ( await bcrypt.compare( user.password, userFoundResponse.recordset[ 0 ].password ) )
            {
                let token = jwt.sign(
                    id: userFoundResponse.recordset[ 0 ].id,
                    username: userFoundResponse.recordset[ 0 ].username,
                  email:userFoundResponse.recordset[ 0 ].email
                )
            }
        }
    } catch (error) {
        
    }
};
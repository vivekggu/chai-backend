import { asyncHandler } from "../utils/asyncHandler.js";


const registerUser = asyncHandler( async ( req, res ) => {
  // get user details from fronted 
  // validation - not empty
  // check for images, check for avatar 
  // upload them to cloudinary, avatar
  // create user object - create enter in db
  // remove password and refresh token field from responses
  // check for user creation
  // return res


  const { fullName, email, username, password } = req.body
    console.log("email: ", email);
    

})


export { registerUser }
import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import { User } from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/Apiresponse.js";

const registerUser = asyncHandler( async ( req, res ) => {
    res.status(200).json({
      message: "ok"  
    })

const { fullName, email, username, password } = req.body
     console.log("email: ", email);

    if(
      [fullName, email, username, password].some((field) =>
      field?.trim() === "")
    ){
      throw new ApiError(400, "All fields are required")
    }
     User.findOne({
      $or: [{ username }, { email }]
     })

     if (existedUser){
      throw new ApiError(409, "User with email or username already exists")
     }

     const avatarLocalPath = req.files?.avatar[0]?.path;
     const coverImageLocalPath = req.files?.coverImage[0]?.path;

     if (!avatarLocalPath) {
      throw new ApiError(400, "Avatar files is required")
     }

     const avatar = await uploadOnCloudinary(avatarLocalPath)
     const coverImage = await uploadOnCloudinary(coverImageLocalPath)
    
     if (!avatarLocalPath) {
      throw new ApiError(400, "Avatar files is required")
     }

    const user = await User.create({
      fullName,
      avatar: avatar.url,
      coverImage: coverImage?.url || "",
      email,
      password,
      username: username.toLowerCase()
     })

  const createUser  = await User.findById(user._id).select(
    "-password -refreshToken"
  )

  if(!createdUser){
    throw new ApiError(500, "Something went wrong while registering the user")
  }

     return res.status(201).json(
      new ApiResponse(200, createUser, "User registered Successfully")
     )

})



export { registerUser,
 }

  // get user details from fronted 
  // validation - not empty
  // check for images, check for avatar 
  // upload them to cloudinary, avatar
  // create user object - create enter in db
  // remove password and refresh token field from responses
  // check for user creation
  // return res

   


// handling middleware by help of promise

const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).
        catch ((err) => next(err))
    }
}





    export {asyncHandler}








// handling middleware by help of try and catch

    // const asyncHandler = () => {}
    // const asyncHandler = (func) => () => {}
    // const asyncHandler = (func) => async () => {}


// const asyncHandler = (fn) => async(req, res, next) => 
//     {
//         try {
//             await fn(req, res, next)
//         } catch (error) {
//             res.status(error.code || 500).json({
//                 success: false,
//                 message: error.message
//             })
//         }
// }

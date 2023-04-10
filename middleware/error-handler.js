import { StatusCodes } from 'http-status-codes'



const errorHandlerMiddleware=(err,req,res,next)=>{
console.log(err);
const defaultError={
    statusCode:StatusCodes.INTERNAL_SERVER_ERROR,
    msg:'Something went wrong, try again latter'
}
if (err.name='ValidationError'){
    defaultError.statusCode=StatusCodes.BAD_REQUEST
    defaultError.msg=err.message
}

res.status(defaultError.statusCode).json({msg:err})
// res.status(defaultError.statusCode).json({msg:defaultError.err})



}

export default errorHandlerMiddleware; 
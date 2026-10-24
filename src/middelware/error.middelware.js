const errorMiddelware = (err,req,res,next) => {
    const statusCode = err.statusCode || (err.name === "ValidationError" ? 400: 500);
    const message = err.message ||"Internal Server Error"
    
    res.status(statusCode).json({
        sucess:false,
        message,
    });
   
};

export default errorMiddelware;

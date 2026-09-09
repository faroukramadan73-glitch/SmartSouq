const errorMiddelware = (err,req,res,next) => {
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        success:false,
        message:err.meesage||"Internal Server Error",
    });
};

export default errorMiddelware;

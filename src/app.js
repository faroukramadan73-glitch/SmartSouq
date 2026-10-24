import express from 'express';
import authRoutes from '../src/modules/auth/auth.routes.js';
import userRoutes from '../src/modules/user/user.routes.js';
import errorMiddelware from '../src/middelware/error.middelware.js';



const app = express()

app.use(express.json());
app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)
app.use(errorMiddelware)




app.get("/",(req,res)=>{
    res.json({success:true,message:"SmartSouq Api is running"})
});

export default app


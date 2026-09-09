import express from 'express';



const app = express()

app.use(express.json());




app.get("/",(req,res)=>{
    res.json({success:true,message:"SmartSouq Api is running"})
});

export default app


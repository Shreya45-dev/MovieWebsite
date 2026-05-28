const express=require('express')//npm i express
const cookieParser=require('cookie-parser') //npm i cookie-parser
const authRoutes=require('./routes/auth.routes')
const app=express();
//const foodRoutes=require('./routes/food.routes')
//const foodPartnerRoutes=require('./routes/food-partner.routes')
const cors=require('cors')

app.use(cors({
    origin:"https://moviewebsite-frontendd.onrender.com",
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())
app.get("/",(req,res)=>{
    res.send("Hello World")
})
app.get("/hello",(req,res)=>{
    res.send("Hello kyaa ho rha hai")
})
app.use('/api/auth',authRoutes)
module.exports=app; 
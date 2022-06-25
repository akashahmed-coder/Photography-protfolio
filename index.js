require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')
const app = express();

app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles:true
}))

app.use("/api",require('./routers/homeImageRoute'))
app.use("/api",require('./routers/upload'))


// app.use("/api",require("./routers/typeRouter"))

const URI = process.env.MONGODB_DATABASE
mongoose.connect(URI,{
    // useCreateIndex:true,
    // useFindAndModify:false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("database connection successfull")
}).catch((err)=>{
    console.log(err)
})

app.get("/",(req,res)=>{
    res.json({message:"hellow it is my home page"})
})

const PORT = process.env.PORT || 5000




app.listen(PORT,()=>{
    console.log(`server runnig successfull at ${PORT}`)
})


require("dotenv").config({ path: "./.env" });
const express = require("express");
const app = express();

//database
const connectDb = require("./models/db");
connectDb();

//file uploader 

const fileUpload = require("express-fileupload");
app.use(fileUpload());

// const cors = require("cors");
// app.use(cors());
const cors=require("cors");
const corsOptions ={
   origin:'http://localhost:3000', 
   credentials:true,        
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

// logger
const morgan = require("morgan");
app.use(morgan("tiny"));

//body parser

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// sessions
const session = require("express-session");
const cookieparser = require("cookie-parser");
app.use(
  session({
    resave: true, 
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
  })
);
app.use(cookieparser())


//routes
app.get('/' ,(req,res)=>{
  res.json({message : "HELLOW WORLD !!"})
})

app.use("/api/v1/user", require("./routes/index"));
app.use("/api/v1/user", require("./routes/resume"));
app.use("/api/v1/user",require("./routes/employe"));

// errors
const errorHandler = require("./utils/errorHandler");
const { gentatedErrors } = require("./middlewares/errors");

app.all("*", (req, res, next) => {
  next(new errorHandler("Page not found", 404));
});

app.use(gentatedErrors);

app.listen(process.env.PORT, console.log("running..... "));

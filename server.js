const express = require("express");
const app = express();
const db = require("./db");
const PORT = 4000;
const cors = require("cors");
// const cookieParser = require('cookie-parser');

app.use(express.json());
// app.use(cookieParser());

require("dotenv").config();

// { { { { { { { {data base } } } } } } } }
db();

// {{{{{{{{{{middel ware}}}}}}}}}}

app.use(
  cors({
    // https://blogmeraapp.vercel.app
    origin: ["https://kkrffrontend.netlify.app", "http://localhost:5173"],
    credentials: true,
    exposedHeaders: ["set-cookie"],
  })
);

// {{{{{{{{{{router}}}}}}}}}}
const userRoutes = require("./routes/userRoutes");

app.use("/user", userRoutes);

// {{{{{{{{{{{{{}}}}}}}}}}}}}

app.get("/", (req, res) => {
  res.send("hol");
});

app.listen(PORT, () => {
  console.log("server running on" + PORT);
});

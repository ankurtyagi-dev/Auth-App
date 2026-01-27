import express from "express";
import 'dotenv/config'
import connect from "./config/database.js";
import router from "./Routes/user.js";


const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/api/v1", router);

app.listen(PORT, ()=> {
    console.log(`App is listening at ${PORT}`);
})
connect();

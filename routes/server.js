import express from "express";
import 'dotenv/config'
import cors from "cors";
import { connectDB } from "./config/db.js";
import getTableData  from "./controllers/tableController.js";



const app = express();
const port = process.env.port || 5000;

app.use(express.json());
app.use(cors());


connectDB();

const DataRouter = express.Router();
DataRouter.get("/getTop10",  getTableData )

app.use("/api" , DataRouter)


app.get("/", (req,res) => {
    res.send("Api Working...")
})



app.listen(port, () => {
    console.log(`Server Started at http://localhost:${port}`)
})


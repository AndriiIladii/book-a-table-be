import express from "express";
import tableRoutes from "./routes/tables.js";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/tables", tableRoutes);

app.get("/", (req, res) => res.send("HELLO FROM HOMEPAGE"));

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

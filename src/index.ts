import dotenv from "dotenv";
import express from "express";
import path from "path";
import cors from 'cors';
import * as routes from "./routes";

dotenv.config();

const port = process.env.SERVER_PORT || 8080;
const app = express();

app.use(express.json());
//  防止CORS
app.use(cors());
//  設定模板引擎
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
//  設定靜態資源路徑
app.use(express.static(path.join(__dirname, "public")));
//  註冊router
routes.register(app);

// start the express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});

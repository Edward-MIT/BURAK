import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

// expressning 4 ta bo'limi mavjud

/* ENTERENCE */

// console.log(__dirname);

const app = express();
// console.log("__dirname:", __dirname);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));

/* SESSIONS */


/* VIEWS */
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");


/* ROUTERS  */

app.use("/admin", routerAdmin); // SSR :EJS

app.use("/", router);  // SPA : REACT

export default app;

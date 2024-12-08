import express from "express";
import path from "path";

// expressning 4 ta bo'limi mavjud

/* ENTERENCE */

const app = express();
// console.log("__dirname:", __dirname);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

/* SESSIONS */


/* VIEWS */
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");


/* ROUTERS  */

export default app;

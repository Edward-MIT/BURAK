import cors from "cors";
import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { MORGAN_FORMAT } from "./libs/config";

import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";
import { T } from "./libs/types/common";

const MongoDBstore = ConnectMongoDB(session);
const storee = new MongoDBstore({
  uri: String (process.env.MONGO_URL),
  collection : "sessions"
});



// expressning 4 ta bo'limi mavjud

/* ENTERENCE */

const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static("./uploads"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({credentials: true, origin: true}));
app.use(cookieParser());
app.use(morgan(MORGAN_FORMAT));

/* SESSIONS */

app.use(
  session({
    secret: String(process.env.SESSION_SECRET),
    cookie: {
      maxAge: 1000 * 3600 * 3 // 3 hours
    },
    store: storee,
    resave: true,
    saveUninitialized: true
  })
);

app.use(function (req, res, next){
  const sessionInstancen = req.session as T;
  res.locals.member = sessionInstancen.member;
  next();
});


/* VIEWS */
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");


/* ROUTERS  */

app.use("/admin", routerAdmin); // SSR :EJS

app.use("/", router);  // SPA : REACT

export default app;

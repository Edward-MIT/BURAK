
import {Request, Response} from "express";
import {T} from "../libs/types/common";


const memberController: T = {};

memberController.goHome = (req: Request, res: Response) =>{
  try {
    res.send("Home page");
  } catch(err) {
    console.log("Error on router/HomePage", err);
  }

};

memberController.getLogin = (req: Request, res: Response) =>{
  try {
    res.send("Login page");
  } catch(err) {
    console.log("Error on router/LoginPage", err);
  }

};

memberController.getSignup = (req: Request, res: Response) =>{
  try {
    res.send("SignUp page");
  } catch(err) {
    console.log("Error on router/SignUpPage", err);
  }

};

export default memberController;

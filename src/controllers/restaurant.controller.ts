import {Request, Response} from "express";
import {T} from "../libs/types/common";
import MemberServise from "../models/Member.server";


const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) =>{
  try {
    res.send("Home page");
  } catch(err) {
    console.log("Error on router/HomePage", err);
  }

};

restaurantController.getLogin = (req: Request, res: Response) =>{
  try {
    res.send("Login page");
  } catch(err) {
    console.log("Error on router/LoginPage", err);
  }

};

restaurantController.getSignup = (req: Request, res: Response) =>{
  try {
    res.send("SignUp page");
  } catch(err) {
    console.log("Error on router/SignUpPage", err);
  }

};

export default restaurantController;
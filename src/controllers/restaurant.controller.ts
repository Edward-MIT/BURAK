import {Request, Response} from "express";
import {T} from "../libs/types/common";


const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) =>{
  try {
    console.log("gohome");
    res.send("Home page");
  } catch(err) {
    console.log("Error on router/HomePage", err);
  }

};

restaurantController.getLogin = (req: Request, res: Response) =>{
  try {
    console.log("getLogin");
    res.send("Login page");
  } catch(err) {
    console.log("Error on router/LoginPage", err);
  }

};

restaurantController.getSignup = (req: Request, res: Response) =>{
  try {
    console.log("getSignup");
    res.send("SignUp page");
  } catch(err) {
    console.log("Error on router/SignUpPage", err);
  }

};

restaurantController.processLogin = (req: Request, res: Response) =>{
  try {
    console.log("processLogin");
    res.send("DONE")
  } catch(err) {
    console.log("Error on router/processLogin", err);
  }

};

restaurantController.processSignup = (req: Request, res: Response) =>{
  try {
    console.log("processSignUp");
    res.send("DONE")
  } catch(err) {
    console.log("Error on router/processSignup", err);
  }

};



export default restaurantController;
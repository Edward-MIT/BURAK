import {Request, Response} from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service";
import { MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enam";


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

restaurantController.processSignup = async (req: Request, res: Response) =>{
  try {
    console.log("processSignUp");
    console.log("body:", req.body);

    const newMember: MemberInput  = req.body;
    newMember.memberType = MemberType.RESTAURANT;

    const memberService = new MemberService();
    // await memberService.processSignup(newMember);
    const result = await memberService.processSignup(newMember);


    res.send(result);
  } catch(err) {
    console.log("Error on router/processSignup", err);
    res.send(err)
  }

};



export default restaurantController;
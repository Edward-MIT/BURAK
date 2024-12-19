import {Request, Response} from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service";
import { MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enam";
import { LoginInput } from "../libs/types/member";
const memberService = new MemberService();



const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) =>{
  try {
    console.log("gohome");
    res.render("home");
  } catch(err) {
    console.log("Error on router/HomePage", err);
  }

};

restaurantController.getSignup = (req: Request, res: Response) =>{
  try {
    console.log("getSignup");
    res.render("signup");

  } catch(err) {
    console.log("Error on router/SignUpPage", err);
  }

};

restaurantController.getLogin = (req: Request, res: Response) =>{
  try {
    console.log("getLogin");
    res.render("login");

  } catch(err) {
    console.log("Error on router/LoginPage", err);
  }

};



restaurantController.processSignup = async (req: Request, res: Response) =>{
  try {
    console.log("processSignUp");

    const newMember: MemberInput  = req.body;
    newMember.memberType = MemberType.RESTAURANT;
    const result = await memberService.processSignup(newMember);

    // TODO SESSIONS


    res.send(result);
  } catch(err) {
    console.log("Error on router/processSignup", err);
    res.send(err)
  }

};

restaurantController.processLogin = async (req: Request, res: Response) =>{
  try {
    console.log("processLogin");

    const input: LoginInput = req.body;
    const result = await memberService.processLogin(input);

    // TODO SESION


    res.send(result);
  } catch(err) {
    console.log("Error on router/processLogin", err);
    res.send(err);
  }

};





export default restaurantController;
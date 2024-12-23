import {Request, Response} from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service";
import { AdminRequest, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enam";
import { LoginInput } from "../libs/types/member";
import { Message } from "../libs/Error";
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



restaurantController.processSignup = async (req: AdminRequest, res: Response) =>{
  try {
    console.log("processSignUp");

    const newMember: MemberInput  = req.body;
    newMember.memberType = MemberType.RESTAURANT;
    const result = await memberService.processSignup(newMember);
   // TODO SESSIONS
    req.session.member = result;
    req.session.save(function(){
    res.send(result);
    });

  } catch(err) {
    console.log("Error on router/processSignup", err);
    res.send(err)
  }

};

restaurantController.processLogin = async (req: AdminRequest, res: Response) =>{
  try {
    console.log("processLogin");

    const input: LoginInput = req.body;
    const result = await memberService.processLogin(input);

    // TODO SESION
    req.session.member = result;
    req.session.save(function(){
    res.send(result);
    });

  } catch(err) {
    console.log("Error on router/processLogin", err);
    res.send(err);
  }

};

restaurantController.checkAuthSesssion = async (req: AdminRequest, res: Response) =>{
  try {
    console.log("checkAuthSession");
    if(req.session?.member) res.send(`<script> alert("${req.session.member.memberNick}")</script>`);
    else res.send(`<script> alert("${Message.NOT_AUTHENTICATED}")</script>`);

  } catch(err) {
    console.log("Error on router/processLogin", err);
    res.send(err);
  }

};





export default restaurantController;
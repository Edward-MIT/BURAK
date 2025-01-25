
import {Request, Response} from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors from "../libs/Error";
import AuthService from "../models/Auth.service";

const memberService = new MemberService();
const authService = new  AuthService();

// REACT

const memberController: T = {};


memberController.signup = async (req: Request, res: Response) =>{
  try {
    console.log("SignUp");
    const input: MemberInput  = req.body,
          result: Member = await memberService.signup(input),
          token = await authService.createTooken(result);
          console.log("token:", token);

          //  TODO: TOKEN


    res.json({member: result});
  } catch(err) {
    console.log("Error Signup", err);
    if(err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }

};

memberController.login = async (req: Request, res: Response) =>{
  try {
    console.log("Login");
    const input: LoginInput = req.body,
          result = await memberService.login(input),
          token = await authService.createTooken(result);
          console.log("token:", token );
          // TODO: TOKEN

    res.json({member: result});
  } catch(err) {
    console.log("Error Login", err);
    if(err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }

};


export default memberController;

import Errors, { Message } from "../libs/Error";
import { AUTH_TIMER } from "../libs/config";
import {Member} from "../libs/types/member";
import jwt from "jsonwebtoken";
import { HttpCode } from "../libs/Error";

class AuthService{
  constructor() {}

  public async createTooken(payload: Member) {
    return new Promise((resolve, reject) =>{
      const davomiylik = `${AUTH_TIMER}h`;
      jwt.sign(payload, process.env.SECRET_TOKEN as string, {expiresIn: davomiylik

      },(err, token) =>{
       if (err) reject(new Errors(HttpCode.UNAUTHORIZED, Message.TOKEN_CREATION_FAILED));
       else resolve(token as string);

      });
    });


  }
}

export default AuthService;
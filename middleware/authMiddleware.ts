// const jwt = require("jsonwebtoken");
import jwt, { JwtPayload, VerifyErrors, VerifyOptions } from "jsonwebtoken"
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express'
import { GENERAL_E_0001, GENERAL_E_0010 } from "../config/responseCodes/general";
import AppError  from "../utils/AppError";
import  responseHandler  from "../utils/responseHandler";
import { secretKey } from "../config/const";


interface DecodedToken extends JwtPayload {
  id?:string
}
let tokenId: string | undefined;
const authMiddleware = async (req:Request, res:Response, next:NextFunction) => {
  
  console.log("from authmiddleware")

  try {
    const token: string|null = req.headers["authorization"]?.split(" ")[1] || null;
    if(token){
        const tokenDetails = <DecodedToken>jwt.verify(token, secretKey)
        req.userId = tokenDetails.id;
        next();
    }
    else{
      throw next(new AppError(GENERAL_E_0010))
    }
    
  } catch (error) {
    next(new AppError(GENERAL_E_0001))
  }

};
export { authMiddleware, tokenId }

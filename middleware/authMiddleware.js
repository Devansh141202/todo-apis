// const jwt = require("jsonwebtoken");
import jwt from "jsonwebtoken"

import { GENERAL_E_0001, GENERAL_E_0010 } from "../config/responseCodes/general.js";
import { AppError } from "../utils/AppError.js";
import { responseHandler } from "../utils/responseHandler.js";
import { secretKey } from "../config/const.js";

const authMiddleware = async (req, res, next) => {
  console.log("from authmiddleware")
  try {
    const token = req.headers["authorization"].split(" ")[1];
    jwt.verify(token, secretKey, (err, decoded) => {
      if(err) throw new AppError(GENERAL_E_0010)
      else {
        req.body.userId = decoded.id;
        next();
      }
    });
  } catch (error) {
    next(new AppError(GENERAL_E_0001))
  }

};
export { authMiddleware }

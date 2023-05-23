// const jwt = require("jsonwebtoken");
import jwt from "jsonwebtoken"
import { catchAsync } from "../utils/catchAsync.js"
import { errorHandler } from "../utils/errorHandler.js";
import { GENERAL_E_0010 } from "../config/responseCodes/general.js";

const authMiddleware = catchAsync(async (req, res, next) => {
  const token = req.headers["authorization"].split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return errorHandler(res, GENERAL_E_0010)
    else {
      req.body.userId = decoded.id;
      next();
    }
  });
});
export { authMiddleware }

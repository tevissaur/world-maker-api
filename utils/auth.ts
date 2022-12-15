import jwt from "jsonwebtoken";
import config from 'dotenv'
require("dotenv").config();

const secret = process.env.JWT_SECRET;
const expiration = "12h";

export function authMiddleware({ req }: { req: any }) {
  // allows token to be sent via req.body, req.query, or headers
  let token = req.body.token || req.query.token || req.headers.authorization;

  // ["Bearer", "<tokenvalue>"]
  if (req.headers.authorization)
    token = token.split(" ").pop().trim();

  if (!token) return req;

  try {
    const data = jwt.verify(token, secret, { maxAge: expiration });
    req.user = data;
  } catch {
    console.log("Invalid token");
  }

  return req;
}

export function signToken({ username, email, _id }: { username: string; email: string; _id: string; }) {
  const payload = { username, email, _id };

  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
}

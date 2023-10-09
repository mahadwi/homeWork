import jwt from "jsonwebtoken";

const signToken = (data) => {
  console.log(data);
  return jwt.sign(data, "rahasia");
}

export default signToken;
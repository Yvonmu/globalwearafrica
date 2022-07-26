import User from "../../../model/user";
import bcrypt from "bcryptjs";
import { signToken } from "../../../utils/auth";
import dbConnect from "../../../utils/db";

dbConnect();
const Login = async (req, res) => {
  const { method } = req;
  const { email, password } = req.body;
  if (method === "POST") {
    const user = await User.findOne({ email });
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = signToken(user);
      const data = {
        token,
        username: user.username,
        email: user.email,
      };
      return res
        .status(200)
        .send({ message: "LOGGED IN SUCCESSFULLY", data: data });
    } else {
      res.statusCode(401).send({ message: "Invalid Username or Password" });
    }
  }
};

export default Login;

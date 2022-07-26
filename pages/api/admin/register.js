import User from "../../../model/user";
import bcrypt from "bcryptjs";
import dbConnect from "../../../utils/db"
import { sign } from "../../../utils/jwt";

dbConnect()
const register = async (req, res) => {
  const { method } = req;
  if (method === "POST") {
    try {
      const {
        username,
        email,
        password,
      } = req.body;
      const exist = await User.findOne({ email }).catch((err) =>
        console.log(err)
      );
      if (exist)
        return res.status(409).send({ message: "Account already exists" });
      const hashedPassword = bcrypt.hashSync(password);
      const newAccount = await User.create({
        username,
        email,
        password: hashedPassword,
      }).catch((err) => {
        console.log(err);
      });
      newAccount.password = undefined;
      newAccount._doc.token = await sign({
        username,
        email,
        role: "user",
      });
      return res
        .status(201)
        .send({ message: "Signed up successfully!", data: newAccount });
    } catch (error) {
      return res.status(500).send({ message: "SERVER_ERROR" });
    }
  }
};

export default register;

import dbConnect from "../../utils/db";
import Query from "../../model/query";
dbConnect();

const query = async (req, res) => {
  const { method } = req;
  if (method === "POST") {
    try {
      const message = await Query.create(req.body)
        .then(() => console.log("Message Sent !!"))
        .catch((err) => {
          console.log(err);
        });
      res.status(201).json(message);
    } catch (err) {
      res.status(500).json(err);
    }
  } else if (method === "GET") {
    try {
      const notes = await Query.find()
        .sort({ updatedAt: -1 })
        .catch((err) => {
          throw error;
        });
      return res
        .status(201)
        .send({ message: "Driver Info fetched successfully!", data: notes });
    } catch (error) {
      return res.status(500).send({ message: "SERVER_ERROR" });
    }
  } else if (method === "DELETE") {
    try {
      const { id } = req.query;
      await Query.findByIdAndDelete({ _id: id }).catch((err) => {
        throw error;
      });
      return res
        .status(200)
        .send({ message: "Driver Info deleted successfully!" });
    } catch (error) {
      return res.status(500).send({ message: "SERVER_ERROR" });
    }
  } else if (method === "UPDATE") {
    try {
      const { id } = req.query;
      await Query.findByIdAndUpdate({ _id: id }).catch((err) => {
        throw error;
      });
      return res
        .status(200)
        .send({ message: "Driver Info deleted successfully!" });
    } catch (error) {
      return res.status(500).send({ message: "SERVER_ERROR" });
    }
  }
};
export default query;

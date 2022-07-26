import dbConnect from "../../utils/db";
import Team from "../../model/team";

export default async function handler(req, res) {
  const { method } = req;
  dbConnect();
  if (method === "POST") {
    try {
      const dataInfo = await Team.create(req.body)
        .then(() => console.log("Team created successfully!"))
        .catch((err) => {
          console.log(err);
        });

      res.status(201).json(dataInfo);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  else if (method === "GET") {
    try {
      const dataInfo = await Team.find().populate({path:'driver', select:['firstName','password']});
      return res.status(201).send({message:'Team Info fetched successfully!', data:dataInfo})
  
    } catch (error) {
      return res.status(500).send({message:'SERVER_ERROR'})
    }
  }
  else if (method === "DELETE") {
    try {
      const { id } = req.query;
      await Team.findByIdAndDelete({ _id: id }).catch((err)=>{throw error });
      return res.status(200).send({message:'Team Info deleted successfully!'})
  
    } catch (error) {
      return res.status(500).send({message:'SERVER_ERROR'})
    }
  }
  else if (method === "UPDATE") {
    try {
      const { id } = req.query;
      await Team.findByIdAndUpdate({ _id: id }).catch((err)=>{throw error });
      return res.status(200).send({message:'Team Info deleted successfully!'})
  
    } catch (error) {
      return res.status(500).send({message:'SERVER_ERROR'})
    }
  }
}

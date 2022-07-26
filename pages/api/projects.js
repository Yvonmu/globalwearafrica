import dbConnect from "../../utils/db";
import Projects from "../../model/project";

export default async function projectHandler(req, res) {
  const { method } = req;
  dbConnect();
  if (method === "POST") {
    try {
      const project = await Projects.create(req.body)
        .then(() => console.log("project created successfully!"))
        .catch((err) => {
          console.log(err);
        });

      res.status(201).json(project);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  else if (method === "GET") {
    try {
      const project = await Projects.find().populate({path:'driver', select:['firstName','password']});
      return res.status(201).send({message:'project fetched successfully!', data:project})
  
    } catch (error) {
      return res.status(500).send({message:'SERVER_ERROR'})
    }
  }
  else if (method === "DELETE") {
    try {
      const { id } = req.query;
      await Projects.findByIdAndDelete({ _id: id }).catch((err)=>{throw error });
      return res.status(200).send({message:'project deleted successfully!'})
  
    } catch (error) {
      return res.status(500).send({message:'SERVER_ERROR'})
    }
  }
  else if (method === "UPDATE") {
    try {
      const { id } = req.query;
      await Projects.findByIdAndUpdate({ _id: id }).catch((err)=>{throw error });
      return res.status(200).send({message:'project deleted successfully!'})
  
    } catch (error) {
      return res.status(500).send({message:'SERVER_ERROR'})
    }
  }
}

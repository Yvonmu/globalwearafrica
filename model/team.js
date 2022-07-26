import mongoose from "mongoose";

const TeamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    instagram:{type:String},
    linkedin:{type:String},
    twitter:{type:String},
  },
  { timestamps: true }
);

export default mongoose.models.Team ||
  mongoose.model("Team", TeamSchema);

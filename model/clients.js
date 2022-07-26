import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Client ||
  mongoose.model("Client", ClientSchema);

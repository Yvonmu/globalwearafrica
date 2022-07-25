const mongoose = require("mongoose");

const QuerySchema = new mongoose.Schema(
  {
    names: {
      type: String,
      required: false,
      default: 0,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      maxlength: 60,
    },
    phone: {
      type: String,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Query || mongoose.model("Query", QuerySchema);

import { Schema, Types, model } from "mongoose";
import utilsService from "../services/utils.service";

interface ILandmark {
  name: string;
  description: string;
  regions: Schema.Types.ObjectId[];
}

const landmarkSchema = new Schema<ILandmark>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  regions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Region",
    },
  ],
});

landmarkSchema.pre("save", async function (next) {
  console.log(this, "x");
  await utilsService.createDefaultArticle(this);
  next();
});

const Landmark = model<ILandmark>("Landmark", landmarkSchema);

export default Landmark;

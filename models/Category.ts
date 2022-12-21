import { Schema, model } from "mongoose";
import utilsService from "../services/utils.service";

interface ICategory {
  name: string;
  parentCategory: Schema.Types.ObjectId;
  subCategories: Schema.Types.ObjectId[];
}

const CategorySchema = new Schema<ICategory>({
  name: {
    type: String,
  },
  parentCategory: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  subCategories: [
    {
      type: Schema.Types.ObjectId,
      ref: "Category",
      default: [],
    },
  ],
});

CategorySchema.pre("save", async function (next) {
  await utilsService.createDefaultArticle(this);
  next();
});

const Category = model<ICategory>("Category", CategorySchema);

export default Category;

import { Schema, model } from 'mongoose'

interface ICategory {
    name: string;
    parentCategory: Schema.Types.ObjectId;
    subCategories: Array<Schema.Types.ObjectId>;
}

const CategorySchema = new Schema<ICategory>({
    name: {
        type: String
    },
    parentCategory: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    subCategories: [{
        type: Schema.Types.ObjectId,
        ref: 'Category',
        default: []
    }]
})

const Category = model<ICategory>('Category', CategorySchema)

export default Category
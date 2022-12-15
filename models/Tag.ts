import { Schema, model } from "mongoose";

interface ITag {
    name: string;
}

const TagSchema = new Schema<ITag>({
    name: {
        type: String,
        required: true
    }
})

const Tag = model<ITag>('Tag', TagSchema)

export default Tag
import { Schema, Types, model } from "mongoose";

interface IItem {
    name: string;

}

const ItemSchema = new Schema<IItem>({
    name: String
})


const Item = model<IItem>('Item', ItemSchema)

export default Item
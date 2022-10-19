import { Schema, model } from 'mongoose'

interface IWiki {
    world: Schema.Types.ObjectId;
    categories: Array<Schema.Types.ObjectId>;
}


const WikiSchema = new Schema<IWiki>({
    world: {
        type: Schema.Types.ObjectId,
        required: true
    },
    categories: [{
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }]
})

const Wiki = model<IWiki>('Wiki', WikiSchema)

export default Wiki
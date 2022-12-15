import { Schema, model } from 'mongoose';
import utilsService from '../services/utils.service';

export interface IWorld {
    name: string;
    creator: Schema.Types.ObjectId;
    religions: Schema.Types.ObjectId[];
    classes: Schema.Types.ObjectId[];
    races: Schema.Types.ObjectId[];
    regions: Schema.Types.ObjectId[];
    historicalEvents: Schema.Types.ObjectId[];
    description: string;
    wiki: Schema.Types.ObjectId;
}

const worldSchema = new Schema<IWorld>({
    name: {
        type: String,
        trim: true,
        required: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    religions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Religion'
        }
    ],
    classes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Class'
        }
    ],
    races: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Race'
        }
    ],
    regions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Region'
        }
    ],
    historicalEvents: [
        {
            type: Schema.Types.ObjectId,
            ref: 'History'
        }
    ],
    description: {
        type: String
    },
    wiki: {
        type: Schema.Types.ObjectId,
        ref: 'Wiki'
    }
})

// TODO: Virtual Populate Characters
worldSchema.post("save", async function (doc, next) {
    console.log(doc.toJSON(), this.baseModelName);
    await utilsService.createDefaultArticle(doc);
    next();
  });

const World = model<IWorld>('World', worldSchema)

export default World
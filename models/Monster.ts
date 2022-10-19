import { Schema, model, Types } from "mongoose";

interface IMonster {
    name: string;
    description: string;
    size: string;
    regions: Array<Types.ObjectId>
}

const monsterSchema = new Schema<IMonster>({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String
    },
    size: {
        type:  String
    },
    regions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Region'
        }
    ]
});

const Monster = model<IMonster>('Monster', monsterSchema)

export default Monster
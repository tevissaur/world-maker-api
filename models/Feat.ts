import { Schema, Types, model } from "mongoose";
import { AllModelRefs } from "../utils/constants";

interface IPreReq {
    level?: number;
    feat?: Types.ObjectId;
}

export interface IFeat {
    name: string;
    description: string;
    prerequesites: Array<IPreReq>;
    source: Types.ObjectId;
    sourceModel: string;
}

const FeatSchema = new Schema<IFeat>({
    name: String,
    description: String,
    prerequesites: {
        name: String,
        description: String,
        prerequisites: [String]
    },
    source: {
        type: Schema.Types.ObjectId,
        refPath: 'sourceModel'
    },
    sourceModel: {
        type: String,
        required: true,
        enum: AllModelRefs
    }
})

const Feat = model<IFeat>('Feat', FeatSchema)

export default Feat
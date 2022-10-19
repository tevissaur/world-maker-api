import { Schema, Types, model } from 'mongoose'


export interface IArticle {
    subject: Types.ObjectId;
    subjectModel: string;
    title: string;
    body: string;
    category: Types.ObjectId;
}

const ArticleSchema = new Schema<IArticle>({
    subject: {
        type: Schema.Types.ObjectId,
        refPath: 'subjectModel'
    },
    subjectModel: {
        type: String,
        required: true,
        enum: ['Article', 'Character', 'City', 'Class', 'City', 'Country', 'God', 'Landmark', 'Monster', 'Race', 'Region', 'Religion', 'User', 'World']
    },
    title: {
        type: String,
        trim: true,
        required: true
    },
    body: {
        type: String,
        trim: true,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
})

const Article = model<IArticle>('Article', ArticleSchema)

export default Article
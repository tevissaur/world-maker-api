import { Schema, Types, model } from "mongoose";
import { IWorld } from "./World";


interface IGame {
    title: string;
    players: Types.ObjectId[];
    gameMaster: Types.ObjectId;
    setting: Types.ObjectId;
}

const GameSchema = new Schema<IGame>({
    title: {
        type: String,
        required: true
    },
    players: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    gameMaster: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    setting: {
        type: Schema.Types.ObjectId,
        ref: 'World'
    }
})

const Game = model<IGame>('Game', GameSchema)

export default Game
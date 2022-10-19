import { Schema, Types, model } from "mongoose";

interface IEvent {
    name: string;
    date: string;
}

const EventSchema = new Schema<IEvent>({
    name: String,
    date: {
        type: String,
        required: true
    }
})

const Event = model<IEvent>('Event', EventSchema)

export default Event
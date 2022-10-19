import { Schema, Types, model } from "mongoose";

interface ICalendar {
    months: [{
        name: string;
        numDaysPerMonth: number;
    }]; 
    week: {
        numDaysPerWeek: number;
        days: Array<{
            name: string;
        }>;
    };
    numDaysPerYear: number;
    events: string;
}

const CalendarSchema = new Schema<ICalendar>({
    months: [{
        name: String,
        numDays: Number
    }],
    week: {
        numDaysPerWeek: Number,
        days: [{
            name: String,
        }]
    },
    numDaysPerYear: {
        type: Number
    }
})

const Calendar = model<ICalendar>('Calendar', CalendarSchema)

export default Calendar
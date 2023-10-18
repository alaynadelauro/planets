import { Schema } from "mongoose";
export const colonySchema = new Schema(
    {
        name: { type: String, required: true, maxlength: 30 },
        population: { type: Number, required: true, maxlength: 1000 },
        planetId: { type: Schema.Types.ObjectId, required: true, ref: 'Planet' },
        speciesId: { type: Schema.Types.ObjectId, required: true, ref: 'Species' }
    }
)
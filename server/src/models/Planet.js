import { Schema } from "mongoose";

export const planetSchema = new Schema(
    {
        name: { type: String, required: true, maxlength: 30 },
        biome: { type: String, required: true, maxlength: 20 },
        atmosphere: { type: Boolean, required: true },
        galaxy: { type: Schema.Types.ObjectId, required: true, ref: 'Galaxy' },
        creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
    },
    {
        timestamps: true,
        toJSON: { virtuals: true }
    }
)
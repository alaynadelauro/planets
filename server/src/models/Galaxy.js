import { Schema } from "mongoose";

export const galaxySchema = new Schema(
    {
        name: { type: String, required: true, maxlength: 20 },
        stars: { type: Number, required: true, maxlength: 100 },
        creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
    },
    {
        timestamps: true,
        toJson: { virtuals: true }
    }
)
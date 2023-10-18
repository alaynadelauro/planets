import { Schema } from "mongoose";

export const speciesSchema = new Schema(
    {
        name: { type: String, required: true, maxlength: 40 }
    }
)
import mongoose, { Schmea } from "mongoose";

const subscriptionSchema = new Schmea(
    {
        subscriber: {
            type: Schmea.Types.ObjectId, // one who is subscribing
            ref: "User",
        },
        channel: {
            type: Schema.Types.ObjectId, // one to whom 'subscriber' is SUBSCRIBING
            ref: "User",
        },
    },
    {timestamps: true}
)

export const Subscription = mongoose.model("Subscription",subscriptionSchema);

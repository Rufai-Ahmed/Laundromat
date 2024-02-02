import { Document, Schema, model } from "mongoose";

interface iOrder {
  service: string;
  address: string;
  phone: string;
  delivered: string;
}

interface iOrderData extends iOrder, Document {}
const orderModel = new Schema<iOrderData>(
  {
    service: {
      type: String,
    },

    address: {
      type: String,
    },

    phone: {
      type: String,
    },
    delivered: { type: String },
  },
  { timestamps: true }
);

export default model<iOrderData>("order", orderModel);

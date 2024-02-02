import {Document, Schema, Types, model} from "mongoose"


interface iCustomer{
    email: string
    password: string
    token: string
    status: string
    verified: boolean

    order: Array<{}>
}

interface iCustomerData extends iCustomer, Document{}
const customerModel = new Schema<iCustomerData>(
  {
    email: {
      type: String,
    },

    password: {
      type: String,
    },

    token: {
      type: String,
    },

    verified: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
    },

    order:[ {
      type: Types.ObjectId,
      ref: "order"
    }],
  },
  { timestamps: true }
);

export default model<iCustomerData>("customers", customerModel);
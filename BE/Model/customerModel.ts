import {Schema, Types, model} from "mongoose"


interface iCustomer{
    email: string
    password: string
    token: string
    status: string
    verified: boolean
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
  },
  { timestamps: true }
);

export default model<iCustomerData>("customers", customerModel);
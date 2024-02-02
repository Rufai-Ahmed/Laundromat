import { Schema, Types, model } from "mongoose";

interface iServiceProvider {
  email: string;
  password: string;
  token: string;
  status: string;
  verified: boolean;
}

interface iServiceProviderData extends iServiceProvider, Document {}

const serviceProviderModel = new Schema<iServiceProviderData>(
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
        types: String
    }
      
    
  },
  { timestamps: true }
);

export default model<iServiceProviderData>(
  "serviceProvider",
  serviceProviderModel
);

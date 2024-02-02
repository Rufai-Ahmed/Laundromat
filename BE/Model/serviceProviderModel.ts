import { Schema, Types, model } from "mongoose";

interface iServiceProvider {
  email: string;
  password: string;
  token: string;
  status: string;
  verified: boolean;

  services: Array<{}>;
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
      types: String,
    },

    services: [{
      types: Types.ObjectId,
      ref: "services"
    }],
  },
  { timestamps: true }
);

export default model<iServiceProviderData>(
  "serviceProvider",
  serviceProviderModel
);

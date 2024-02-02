import { Document, Schema, model } from "mongoose"


interface iService{
    service: string
    price: number
}

interface iServiceData extends iService, Document{}

const serviceModel = new Schema<iServiceData>(
  {
    service: {
      type: String,
    },

    price: {
      type: Number,
    },
  },
  { timestamps: true }
);


export default model<iServiceData>("service", serviceModel);
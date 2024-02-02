import { Request, Response } from "express";
import orderModel from "../Model/orderModel";
import customerModel from "../Model/customerModel";
import { Types } from "mongoose";

export const CreateOrder = async (req: Request, res: Response) => {
  try {
    const { customerID } = req.params;
    const { service, phone, address } = req.body;

    const customer = await customerModel.findById(customerID);
    const Order = await orderModel.create({
      service,
      phone,
      address,
    });

    customer?.order.push(new Types.ObjectId(Order._id));
    customer?.save();

    return res.status(200).json({
      message: "order created",
      data: Order,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: `${error.message} is the error`,
    });
  }
};
export const ReadOrder = async (req: Request, res: Response) => {
  try {
    const { customerID } = req.params;

    const order = await customerModel.findById(customerID).populate({
      path: "order",
    });

    return res.status(200).json({
      message: "order created",
      data: order,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: `${error.message} is the error`,
    });
  }
};

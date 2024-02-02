import { Response, Request } from "express";
import serviceModel from "../Model/serviceModel";
import serviceProviderModel from "../Model/serviceProviderModel";
import { Types } from "mongoose";

export const createServices = async (req: Request, res: Response) => {
  try {
    const { serviceproviderID } = req.params;
    const { name, price } = req.body;

    const find = await serviceProviderModel.findById(serviceproviderID);

    const service = await serviceModel.create({
      name,
      price,
    });

    find?.services.push(new Types.ObjectId(service._id));
    find?.save();

    return res.status(200).json({
      message: "services created",
      data: service,
    });
  } catch (error) {
    return res.status(404).json({
      message: "service created",
    });
  }
};
export const readoneServices = async (req: Request, res: Response) => {
  try {
    const { servicerID } = req.params;

    const service = await serviceProviderModel
      .findOne({ servicerID })
      .populate({
        path: "services",
      });

    return res.status(200).json({
      message: "one services found",
      data: service,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: `${error.message} is the error`,
    });
  }
};

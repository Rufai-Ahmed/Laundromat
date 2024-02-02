import { Request, Response } from "express";
import { Status } from "../enums";
import crypto from "crypto";
import bcrypt from "bcrypt";

export const CreateServiceprovider = async (req: Request, res: Response) => {
  try {
    const { name, email, password, status } = req.body;

    const OTP = crypto.randomBytes(2).toString("hex");
    const salt = await bcrypt.genSalt(10);
    const encrypt = await bcrypt.hash(password, salt);

    return res.status(200).json({
      message: "service provider created",
      data: "",
    });
  } catch (error: any) {
    return res.status(404).json({
      message: `${error.message} is the error that occured`,
    });
  }
};

export const VerifyServiceprovider = async (req: Request, res: Response) => {
  try {
    const { token } = req.body;

    return res.status(200).json({
      message: "service provider verified",
    });
  } catch (error: any) {
    return res.status(404).json({
      message: `${error.message} is the error that occured`,
    });
  }
};

export const LoginServiceProvider = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const check = "";

    if (check) {
    }

    return res.status(200).json({
      message: "service provider sigfned in",
    });
  } catch (error: any) {
    return res.status(404).json({
      message: `${error.message} is the error that occured`,
    });
  }
};

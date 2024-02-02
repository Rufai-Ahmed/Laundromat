import { Request, Response } from "express";
import { Status } from "../enums";
import crypto from "crypto";
import bcrypt from "bcrypt";
import serviceProviderModel from "../Model/serviceProviderModel";
import { verifiedEmail } from "../utils/email";
import jwt from "jsonwebtoken";

export const CreateServiceprovider = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body; //sign up as service provider

    const OTP = crypto.randomBytes(2).toString("hex");
    const salt = await bcrypt.genSalt(10);
    const encrypt = await bcrypt.hash(password, salt);

    const serviceProvider = await serviceProviderModel.create({
      name,
      email,
      password: encrypt,
      token: OTP,
      status: Status.serviceProvuder,
    });

    verifiedEmail(serviceProvider);

    return res.status(200).json({
      message: "service provider created",
      data: serviceProvider,
    });
  } catch (error: any) {
    console.log(error);

    return res.status(404).json({
      message: `${error.message} is the error that occured`,
    });
  }
};

export const VerifyServiceprovider = async (req: Request, res: Response) => {
  try {
    const { token } = req.body; //verify with token sent to email

    const check = await serviceProviderModel.findOne({ token });

    if (check) {
      await serviceProviderModel.findByIdAndUpdate(
        check._id,
        { token: "" },
        { new: true }
      );

      return res.status(200).json({
        message: "service provider verified",
      });
    } else {
      return res.status(404).json({
        message: "token incorrect",
      });
    }
  } catch (error: any) {
    return res.status(404).json({
      message: `${error.message} is the error that occured`,
    });
  }
};

export const LoginServiceProvider = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body; // login with password and email

    const check = await serviceProviderModel.findOne({ email });

    if (check) {
      const pass = await bcrypt.compare(password, check.password);
      if (pass) {
        if (check.token === "") {
          const login = jwt.sign({ id: check._id }, "JUSTASECRET", {
            expiresIn: "5D",
          });
          return res.status(404).json({
            message: "welcome to our platform ",
            data: login,
          });
        } else {
          return res.status(404).json({
            message: "please go and verify account",
          });
        }
      } else {
        return res.status(404).json({
          message: "password incorrect",
        });
      }
    } else {
      return res.status(404).json({
        message: "email dosent exist on out platform kindly sign up",
      });
    }
  } catch (error: any) {
    return res.status(404).json({
      message: `${error.message} is the error that occured`,
    });
  }
};
export const ReadoneServiceProvider = async (req: Request, res: Response) => {
  try {
    const { serviceID } = req.body; // find by id

    const check = await serviceProviderModel.findById(serviceID);

    return res.status(200).json({
      message: "one user read successfully",
      data: check,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: `${error.message} is the error that occured`,
    });
  }
};
export const ReadallServiceProvider = async (req: Request, res: Response) => {
  try {
    const serviceProviders = await serviceProviderModel.find();

    return res.status(200).json({
      message: "service provider sigfned in",
      data: serviceProviders,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: `${error.message} is the error that occured`,
    });
  }
};

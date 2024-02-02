import { Request, Response } from "express";
import crypto from "crypto";
import bcrypt from "bcrypt";
import customerModel from "../Model/customerModel";
import { Status } from "../enums";
import { verifiedEmail } from "../utils/email";
import jwt from "jsonwebtoken";

export const Createcustomer = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body; //sign up as custoimer

    const OTP = crypto.randomBytes(2).toString("hex");
    const salt = await bcrypt.genSalt(10);
    const encrypt = await bcrypt.hash(password, salt);

    const custoimer = await customerModel.create({
      name,
      email,
      password: encrypt,
      token: OTP,
      status: Status.customer,
    });

    verifiedEmail(custoimer);

    return res.status(200).json({
      message: "customer created",
      data: custoimer,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: `${error.message} is the error that occured`,
    });
  }
};

export const Verifycustomer = async (req: Request, res: Response) => {
  try {
    const { token } = req.body; //verify with token sent to email

    const check = await customerModel.findOne({ token });

    if (check) {
      await customerModel.findByIdAndUpdate(
        check._id,
        { token: "" },
        { new: true }
      );

      return res.status(200).json({
        message: "customer verified",
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

export const Logincustomer = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body; // login with password and email

    const check = await customerModel.findOne({ email });

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

export const Readonecustomer = async (req: Request, res: Response) => {
  try {
    const { customerID } = req.body; // find by id

    const check = await customerModel.findById(customerID);

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

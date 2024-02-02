import axios from "axios";

const URL: string = "https://spin-connect-be.onrender.com";

export const registerClient = async (data: {}) => {
  try {
    return await axios
      .post(`${URL}/register-customer`, data)
      .then((res) => res.data?.data);
  } catch (error) {
    return error;
  }
};

export const registerProvider = async (data: {}) => {
  try {
    return await axios
      .post(`${URL}/register-Serviceprovider`, data)
      .then((res) => res.data?.data);
  } catch (error) {
    return error;
  }
};

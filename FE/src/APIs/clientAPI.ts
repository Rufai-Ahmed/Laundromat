import axios from "axios";

const URL: string = "http://localhost:7776/api";

export const registerClient = async (data: {}) => {
  try {
    return await axios.post(`${URL}/register-customer`, data).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};

export const registerProvider = async (data: {}) => {
  try {
    return await axios
      .post(`${URL}/register-Serviceprovider`, data)
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};

export const verifyProvider = async (data: any) => {
  try {
    return await axios
      .post(`${URL}/verify-Serviceprovider`, data)
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};
export const LoginProvider = async (data: any) => {
  try {
    return await axios
      .post(`${URL}/login-Serviceprovider`, data)
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};

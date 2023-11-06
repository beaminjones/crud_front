import axios from "axios";

const BASE_URL = "http://localhost:3000/api";

export const get = async (endpoint:any) => {
  const res = await axios
    .get(`${BASE_URL + endpoint}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });

  return res;
};


import axios from "axios";

const BASE_URL = "http://localhost:4000/api";

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

export const destroy = async (endpoint:any, payload: any) => {
  const res = await axios
    .delete(`${BASE_URL + endpoint}/${payload}`)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });

  return res;
};

export const post = async (endpoint: string, payload: any) => {

  const body = JSON.stringify(payload);
  const res = await axios.post(BASE_URL + endpoint, body, {
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
  }).then((response) => {
      console.log(response )
      return response;
  }).catch((error) => {
      console.warn(error);
      return error;
  });

  return res;    
}

export const put = async (endpoint: string, payload: any) => {
  const body = JSON.stringify(payload);
  
  try {
    const response = await axios.put(`${BASE_URL + endpoint}`, body, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });
    
    console.log(response);
    return response;
  } catch (error) {
    console.warn(error);
    return error;
  }
}
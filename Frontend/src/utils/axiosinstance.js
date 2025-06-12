// axios ka instance bano
import axios from "axios";

const instance = axios.create({
  baseURL: "/api",
  timeout: 10000,
  withCredentials: true,
});

// make error handler for instace


// response interceptor
instance.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // handle different types of errors use switch case
    switch (error.response.status) {
      case 400:
        console.log("Bad request");
        break;
      case 401:
        console.log("Unauthorized");
        break;
      case 403:
        console.log("Forbidden");
        break;
      case 404:
        console.log("Not found");
        break;
      case 500:
        console.log("Internal server error");
        break;
      default:
        console.log("Something went wrong");
        break;
    }


    return Promise.reject(error);
  }
);

export default instance;
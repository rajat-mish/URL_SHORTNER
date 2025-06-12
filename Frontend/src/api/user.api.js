import instance from "../utils/axiosinstance.js";




export const loginUser = async (email, password) => {
  const { data } = await instance.post("/auth/login", { email, password }); // ✅
  return data;
};

export const registerUser = async (username, email, password) => {
  const { data } = await instance.post("/auth/register", {
    username,
    email,
    password,
  });
  return data;
};

export const logoutUser = async () => {
  await instance.get("/auth/logout"); // ✅
};

export const getCurrentUser = async () => {
  const { data } = await instance.get("/auth/me"); // ✅
  return data;
};

// export const getUserUrls = async () => {
//   const { data } = await instance.post("/user/urls"); // ✅
//   console.log(data);
//   return data;
// };
 // your axios setup
export const getUserUrls = async () => {
  const response = await instance.get('/user/urls', {
    withCredentials: true, // important to send cookies
  })

  return response.data
}
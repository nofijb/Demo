import axios from "axios";

export const signUpUser = async (userData) => {
  let result;
  try {
    const response = await axios.post("http://localhost:8000/users", {
      data: userData,
    });
    result = response.data;
  } catch (error) {
    console.error(error);
  }
  return result;
};

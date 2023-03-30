import axios from "axios";

export const loginUser = async (userData) => {
  let result;
  try {
    const response = await axios.get("http://localhost:8000/users/1", {
      data: userData,
    });
    result = response.data;
  } catch (error) {
    console.error(error);
  }
  return result;
};

import axios from "axios";
import { url } from "./ApiEndPoints";

export const getRequest = async (query: string, page: number) => {
  try {
    const data = await axios.get(`${url}?page=${page}&limit=5&query=${query}`);
    return {
      data: data.data,
      ok: true,
    };
  } catch (error) {
    console.log(error);
    return {
      data: [],
      ok: false,
    };
  }
};

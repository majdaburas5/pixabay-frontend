import axios from "axios";
import { SERVER_URL } from "../constants";
// const SERVER_URL = process.env.REACT_APP_SERVER_ROUTE;

export async function getApiPhotos(category, pageNumber) {
  const response = await axios.get(
    `${SERVER_URL}${category}&pageNumber=${pageNumber}`
  );
  return response.data;
}

import axios from "axios";
import { BASE_URL_SWAPI } from "./constants";

export const getPeople = async (page) => {
  try {
    const data = await axios.get(prepareUrl(`people/?page=${page}`));
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getPlanets = async ({ pageParam }) => {
  let planets = [];
  console.log(pageParam);
  try {
    let data;
    if (!pageParam) {
      data = await axios.get(prepareUrl(`planets/?page=1`));
    } else {
      data = await axios.get(pageParam);
      console.log("inside");
    }
    return data.data;
  } catch (err) {
    console.error(err);
    return planets;
  }
};

const prepareUrl = (url) => {
  return BASE_URL_SWAPI + url;
};

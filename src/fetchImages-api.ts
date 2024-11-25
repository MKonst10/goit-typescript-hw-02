import axios from "axios";
import { Fetch } from "./types";

axios.defaults.baseURL = "https://api.unsplash.com";

export async function fetchImages(
  search: string,
  page: number
): Promise<Fetch> {
  const { data } = await axios.get("/search/photos", {
    params: {
      client_id: "rROOcxrgaSvz3J-ktRZ3eDl9Nmsulij0vEhZYe94i1A",
      query: search,
      page,
      per_page: 12,
      orientation: "landscape",
    },
  });
  return data;
}

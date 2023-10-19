import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "5101e99f5d63417bb371f90a7ccb70d1" },
});

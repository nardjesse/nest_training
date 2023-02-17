import axios from "axios";

export default axios.create({
  baseURL: "https://candidate.belabiod.com/api",
  headers: {
    "Content-type": "application/json"
  }
});
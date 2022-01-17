import axios from "axios";

export default axios.create({
  baseURL: "https://newsapi.org/v2",
  headers: {
    "x-api-key": "fc3caef6d80043009965967862fca491",
  },
});

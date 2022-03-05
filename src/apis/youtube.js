import axios from "axios";

const KEY = "AIzaSyBc4XKlUf5rKBhVvxiq_D9dP83RPA7Ufb8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    maxResults: 5,
    part: "snippet",
    key: KEY
  }
});

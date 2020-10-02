import Axios from "axios";
const _key = "AIzaSyDkj9cViZ0B3eGQ9Lbm26wceeDKt5lsxuU";

export default Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: _key,
  },
});

import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 7742fd36b619bf1cacecf4711d208a7823ffcc4c6f11cf04ccf0f6ba7103e7cd"
  }
});

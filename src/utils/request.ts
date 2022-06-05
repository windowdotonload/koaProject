import config from "@/config/index";
import axios from "axios";

const service = axios.create({
  baseURL: config.baseApi,
});

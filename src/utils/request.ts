// @ts-ignore
import config from "@/config/index";
import axios from "axios";

interface RequestParams {
  method: "get" | "post" | "put" | "delete" | "patch";
  url: string;
  params: Record<string, any>;
}

const service = axios.create({
  baseURL: config.baseApi,
  timeout: 8000,
});

service.interceptors.request.use((config) => {
  return config;
});

service.interceptors.response.use((res) => {
  return res;
});

export default function request(params: RequestParams) {
  return service(params);
}

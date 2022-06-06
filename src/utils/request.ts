// @ts-ignore
import config from "@/config/index";
import axios from "axios";

interface RequestParams {
  method: "get" | "post" | "put" | "delete" | "patch" | "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  url: string;
  params?: Record<string, any>;
}

interface RequestFunc {
  (params: RequestParams): any;
  get(url: string, params: Record<string, any>): any;
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

const request: RequestFunc = (params: RequestParams) => {
  params.method = params.method.toLowerCase() as any;
  return service(params);
};
export default request;

request.get = (url: string, params: Record<string, any>) => {
  return "TODO";
};

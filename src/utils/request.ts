// @ts-ignore
import config from "@/config/index";
import axios from "axios";

interface RequestParams {
  method: "get" | "post" | "put" | "delete" | "patch" | "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  url: string;
  params?: Record<string, any>;
  data?: Record<string, any>;
}

interface RequestFunc {
  (params: RequestParams): any;
  get(url: string, params: Record<string, any>): any;
  post(url: string, params: Record<string, any>): any;
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

const request: RequestFunc = (reqParams: RequestParams) => {
  reqParams.method = reqParams.method.toLowerCase() as any;
  if (reqParams.method === "post" && reqParams.params) {
    reqParams.data = { ...reqParams.params };
    reqParams.params = undefined;
  }
  if (config.env === "prod") {
    service.defaults.baseURL = config.baseApi;
  } else {
    service.defaults.baseURL = config.mock ? config.mockApi : config.baseApi;
  }

  return service(reqParams);
};
export default request;

request.get = (url: string, reqParams: Record<string, any>) => {
  return service.get(url, { params: { ...reqParams } });
};
request.post = (url: string, params: Record<string, any>) => {
  return service.post(url, params);
};

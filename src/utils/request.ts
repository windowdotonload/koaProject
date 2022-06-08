// @ts-ignore
import config from "@/config/index";
import axios from "axios";
import { ElMessage } from "element-plus";

interface RequestParams {
  method: "get" | "post" | "put" | "delete" | "patch" | "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  url: string;
  params?: Record<string, any>;
  data?: Record<string, any>;
}

interface RequestFunc {
  (params: RequestParams): Promise<any>;
  get(url: string, params: Record<string, any>): Promise<any>;
  post(url: string, params: Record<string, any>): Promise<any>;
}

const service = axios.create({
  baseURL: config.env === "prod" ? config.baseApi : config.mock ? config.mockApi : config.baseApi,
  timeout: 8000,
});

service.interceptors.request.use((config) => {
  return config;
});

service.interceptors.response.use((res) => {
  if (res.status === 200 && res.data.code === 200) {
    return res.data;
  } else {
    ElMessage({
      message: "请稍后重试",
      type: "warning",
    });
  }
});

const request: RequestFunc = (reqParams: RequestParams) => {
  reqParams.method = reqParams.method.toLowerCase() as any;
  if (reqParams.method === "post" && reqParams.params) {
    reqParams.data = { ...reqParams.params };
    reqParams.params = undefined;
  }
  return service(reqParams);
};
request.get = (url: string, reqParams?: Record<string, any>) => {
  return service.get(url, { params: { ...reqParams } });
};
request.post = (url: string, params?: Record<string, any>) => {
  return service.post(url, params);
};
export default request;

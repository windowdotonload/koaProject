const env = import.meta.env.MODE || "prod";
const EnvConfig = {
  dev: {
    baseApi: "",
    mockApi: "https://www.fastmock.site/mock/e6fa0eabe0aba670d319a7d4cec85120/api",
  },
  test: {
    baseApi: "",
    mockApi: "https://www.fastmock.site/mock/e6fa0eabe0aba670d319a7d4cec85120/api",
  },
  prod: {
    baseApi: "",
    mockApi: "https://www.fastmock.site/mock/e6fa0eabe0aba670d319a7d4cec85120/api",
  },
};

export default {
  env,
  mock: true,
  ...EnvConfig[env],
};

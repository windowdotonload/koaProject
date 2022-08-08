interface Config {
  env: string;
  mock: boolean;
  baseApi: string;
  mockApi: string;
}

const env = import.meta.env.MODE || "prod";

const EnvConfig: Record<string, Pick<Config, "baseApi" | "mockApi">> = {
  development: {
    baseApi: "/api",
    mockApi: "https://www.fastmock.site/mock/e6fa0eabe0aba670d319a7d4cec85120/api",
  },
  test: {
    baseApi: "/api",
    mockApi: "https://www.fastmock.site/mock/e6fa0eabe0aba670d319a7d4cec85120/api",
  },
  prod: {
    baseApi: "/api",
    mockApi: "https://www.fastmock.site/mock/e6fa0eabe0aba670d319a7d4cec85120/api",
  },
};

const config: Config = {
  env,
  mock: false,
  ...EnvConfig[env],
};

export default config;

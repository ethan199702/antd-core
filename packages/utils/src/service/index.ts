import { message } from "antd";
type TMethods = "get" | "post" | "delete" | "put";

interface RequestConfig {
  url: string;
  params?: Record<string, string>;
  data?: Record<string, any>;
  headers?: Record<string, string>;
}

interface IMessage {
  isShow?: boolean;
  message?: string;
}

const defaultHeaders = {
  "Content-Type": "application/json"
};

class RequestFetch {
  baseUrl: string;
  headers: Record<string, string>;

  constructor(url: string) {
    this.baseUrl = url;
    this.headers = { ...defaultHeaders };
  }
  setHeaders(headers = {}) {
    this.headers = { ...this.headers, ...headers };
  }
  /**
   * @description 格式化url
   * @param url 请求路径
   * @param params params参数
   * @returns {string}
   */
  formatUrl(url: string, params?: Record<string, string>): string {
    const queryString = new URLSearchParams(params || {}).toString();

    return `${this.baseUrl}${url}${queryString}`;
  }
  async request(
    method: TMethods,
    options: RequestConfig,
    messageOptions?: IMessage
  ): Promise<any> {
    const { url, params, data, headers } = options;

    this.setHeaders(headers || {});

    const config = {
      method,
      headers: this.headers,
      body: data ? JSON.stringify(data) : undefined
    };
    try {
      const fullUrl = this.formatUrl(url, params);
      const response = await fetch(fullUrl, config);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "请求失败, 请联系管理员");
      }
      const json = await response.json();
      if ([200, 201].includes(json.statusCode)) {
        if (messageOptions?.isShow)
          message.success(messageOptions.message || json.message);
        return json;
      } else {
        if (messageOptions?.isShow)
          message.error(messageOptions.message || json.message);
        throw new Error(json.message);
      }
    } catch (error) {
      throw new Error(
        typeof error === "string" ? error : "请求失败, 请联系管理员"
      );
    } finally {
    }
  }

  public async get(
    config: RequestConfig,
    messageOption?: IMessage
  ): Promise<any> {
    return this.request("get", config, messageOption);
  }

  public async post(
    config: RequestConfig,
    messageOption?: IMessage
  ): Promise<any> {
    return this.request("post", config, messageOption);
  }

  public async delete(
    config: RequestConfig,
    messageOption?: IMessage
  ): Promise<any> {
    return this.request("delete", config, messageOption);
  }

  public async put(
    config: RequestConfig,
    messageOption?: IMessage
  ): Promise<any> {
    return this.request("put", config, messageOption);
  }
}

export default RequestFetch;

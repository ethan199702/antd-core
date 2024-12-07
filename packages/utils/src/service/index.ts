type TMethods = "GET" | "POST" | "DELETE" | "PUT";

interface RequestConfig {
  url: string;
  params?: Record<string, string>;
  data?: Record<string, any>;
  headers?: Record<string, string>;
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
  async request(methods: TMethods, options: RequestConfig) {
    const { url, params, data, headers } = options;

    this.setHeaders(headers || {});

    const config = {
      methods: methods,
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

      return await response.json();
    } catch (error) {
      console.error("请求错误", error);
      throw new Error(
        typeof error === "string" ? error : "请求失败, 请联系管理员"
      );
    } finally {
    }
  }

  public async get(config: RequestConfig): Promise<any> {
    return this.request("GET", config);
  }

  public async post(config: RequestConfig): Promise<any> {
    return this.request("POST", config);
  }

  public async delete(config: RequestConfig): Promise<any> {
    return this.request("DELETE", config);
  }

  public async put(config: RequestConfig): Promise<any> {
    return this.request("PUT", config);
  }
}

export default RequestFetch;

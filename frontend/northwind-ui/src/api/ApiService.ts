import axios, { AxiosInstance } from 'axios';
import  buildQuery from 'odata-query';

class ApiService {
  private axiosInstance: AxiosInstance;

  constructor() {
    const baseURL = process.env.REACT_APP_BACKEND_URL;
    if (!baseURL) throw new Error('BACKEND_URL is not defined in .env file');

    this.axiosInstance = axios.create({
      baseURL,
    });
  }

  public async get<T = any>(path: string, queryOptions?: object): Promise<T> {
    try {
      const query = queryOptions ? buildQuery(queryOptions) : '';
      const response = await this.axiosInstance.get<T>(`${path}${query}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

const apiService = new ApiService();
export default apiService;

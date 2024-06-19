import axios, { AxiosInstance } from 'axios'
class HttpGHN {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://online-gateway.ghn.vn/shiip/public-api/master-data/',
      headers: {
        token: 'acaa2a58-17d6-11ef-be43-f60ece3fb56e'
      }
    })
  }
}
const httpGHN = new HttpGHN().instance
export default httpGHN

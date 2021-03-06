import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "/api/test/";

class UserService {
  getPublicContent() {
    return axios.get(API_URL + "all");
  }

  getControlPanelContent() {
    return axios.get(API_URL + "mod", { headers: authHeader() });
  }
}

export default new UserService();

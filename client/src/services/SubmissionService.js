import http from "../http-common";
import authHeader from "../authenticationHeader";

class SubmissionService {
  getAll(userId) {
    return http.get(`/submission/${userId}`, {headers: authHeader()});
  }

  /* get(id) {
    return http.get(`/submission/${id}`);
  } */

  create(data) {
    return http.post("/submission", data, {headers: authHeader()});
  }
  
}

export default new SubmissionService();

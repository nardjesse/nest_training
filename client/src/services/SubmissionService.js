import http from "../http-common";
import authHeader from "../authenticationHeader";

class SubmissionService {
  getAll(userId) {
    return http.get(`/candidateProfile/${userId}`, {headers: authHeader()});
  }

  /* get(id) {
    return http.get(`/submission/${id}`);
  } */

  create(data) {
    return http.post("/candidateProfile", data, {headers: authHeader()});
  }
  
}

export default new SubmissionService();
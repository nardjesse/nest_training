import http from "../http-common";

class UploadFileService {
  upload(file) {
    return http.post("/submission/uploadFile", file, {headers: {'Content-Type': 'multipart/form-data'}});
  }
  
}

export default new UploadFileService();

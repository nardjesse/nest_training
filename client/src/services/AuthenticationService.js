import http from "../http-common";
import authHeader from "../authenticationHeader";


class AuthenticationService {
    login(user) {
        return http.post("/login", user);
    }

    logout() {
        localStorage.removeItem("user");
    }

    checkLogin() {
        return http.post("/token", {}, {headers: authHeader()});
    }
}

export default new AuthenticationService();
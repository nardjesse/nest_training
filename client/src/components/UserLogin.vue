<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col col-md-10 col-lg-6">
        <div class="mb-3">
          <label class="form-label">Username</label>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            v-model="username"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            v-model="password"
          />
        </div>

        <button @click="loginUser" class="btn btn-primary">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService.js";
import router from "../router/index";

export default {
  name: "UserLogin",
  data() {
    return {
      username: "",
      password: "",
    };
  },

  methods: {
    loginUser() {
      const loginData = {
        username: this.username,
        password: this.password,
      };

      AuthenticationService.login(loginData)
        .then((response) => {
          if (response.data) {
            localStorage.setItem("user", JSON.stringify(response.data));
          }

          this.navigateListSubmissions();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    navigateListSubmissions() {
      router.push({ path: "/list" });
    },
  },
};
</script>

<style scoped>
</style>
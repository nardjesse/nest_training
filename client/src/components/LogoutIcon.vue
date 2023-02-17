<template>
  <div class="container-fluid">
    <div class="row">
      <div style="text-align: right">
        <button class="btn btn-danger" @click="logoutUser">Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService.js";
import router from "../router/index";

export default {
  name: "LogoutIcon",

  methods: {
    logoutUser() {
      AuthenticationService.logout();
      this.navigateLoginUser();
    },

    navigateLoginUser() {
      router.push({ path: "/login" });
    },
  }
};
</script>

<style>
</style>
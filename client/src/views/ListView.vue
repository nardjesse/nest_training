<template>
  <div>
    <LogoutIcon />
    <div class="container">
      <div class="col">
        <ListSubmissions />
        <div class="col">
        <button class="btn btn-primary" @click="navigateCandidateSubmission">
          Add Submission
        </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListSubmissions from "@/components/ListSubmissions.vue";
import router from "../router/index";
import LogoutIcon from "@/components/LogoutIcon.vue";

export default {
  name: "ListView",
  components: {
    ListSubmissions,
    LogoutIcon,
  },
  methods: {
    navigateCandidateSubmission() {
      router.push({ path: "/form" });
    },
  },
};
</script>

<style scoped>
</style>
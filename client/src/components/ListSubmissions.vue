<template>
      <h3>List of submissions</h3>
      <h6>Total of submissions: {{ submissions.length }}</h6>
      <div class="alert alert-success" role="alert" v-if="(submissions.length > 0 && submissions.length % 10 === 0)">Every day feels like I’ve died and gone to hell</div>
      <table class="table">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Job title</th>
            <th>CV</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(submission, i) in submissions" :key="i">
            <td>{{ submission.firstname }}</td>
            <td>{{ submission.lastname }}</td>
            <td>{{ submission.jobTitle }}</td>
            <td><a :href="submission.cvPath" target="_blank">Link</a></td>
            <td>{{ submission.note }}</td>
          </tr>
        </tbody>
      </table>
</template>

<script>
import SubmissionService from "@/services/SubmissionService";
import router from "../router/index";
// import AuthenticationService from "@/services/AuthenticationService.js";

export default {
  name: "ListSubmissions",
  data() {
    return {
      submissions: [],
      message: ""
    };
  },

  methods: {
    getSubmissions(userId) {
      SubmissionService.getAll(userId)
        .then((response) => {
          this.submissions = response.data;
        })
        .catch((e) => {
          console.log(e);
          this.navigateLoginUser();
        });
    },

    navigateLoginUser() {
      router.push({ path: "/login" });
    },

    getUserId() {
      const user = JSON.parse(localStorage.getItem("user"));
      return user.userId;
    },
  },

  mounted() {
    this.getSubmissions(this.getUserId());
    /*AuthenticationService.checkLogin()
      .then(() => {
        this.getSubmissions(this.getUserId());
      })
      .catch((e) => {
        console.log(e);
        this.navigateLoginUser();
      });*/
    
  },
};
</script>

<style scoped>
.sub-list,
tr,
th,
td {
  border: 1px solid black;
}

tr,
th,
td {
  padding: 5px;
}
</style>

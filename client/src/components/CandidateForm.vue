<template>
  <div class="container">
    <div class="col col-md-10 col-lg-6">
      <div class="row justify-content-center">
        <UploadFile
          v-on:clicked="onUploadClick"
          v-on:fileUploaded="onUploadFile"
        />

        <div v-if="displayForm">
          <div class="mb-3">
            <label class="form-label">Firstname</label>
            <input
              type="text"
              class="form-control"
              placeholder="Firstname"
              v-model="form.firstname"
              required
            />
          </div>

          <div class="mb-3">
            <label class="form-label">Lastname</label>
            <input
              type="text"
              class="form-control"
              placeholder="Lastname"
              v-model="form.lastname"
              required
            />
          </div>

          <div class="mb-3">
            <label class="form-label">Job title</label>
            <input
              type="text"
              class="form-control"
              placeholder="Job title"
              v-model="form.jobTitle"
              required
            />
          </div>

          <div class="mb-3">
            <label class="form-label">Note</label>
            <textarea
              type="text"
              class="form-control"
              placeholder="Note"
              v-model="form.note"
              rows="4"
            />
          </div>

          <button class="btn btn-primary" @click="submit" :disabled="filepath == ''">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UploadFile from "./UploadFile.vue";
import router from "../router/index";
import SubmissionService from "@/services/SubmissionService";
// import AuthenticationService from "@/services/AuthenticationService.js";

export default {
  name: "CandidateForm",

  components: {
    UploadFile,
  },

  data() {
    return {
      form: {
        firstname: "",
        lastname: "",
        jobTitle: "",
        note: "",
      },
      displayForm: false,
      submitted: false,
      filepath: "",
    };
  },

  methods: {
    submit() {
      const data = {
        firstname: this.form.firstname,
        lastname: this.form.lastname,
        jobTitle: this.form.jobTitle,
        note: this.form.note,
        cvPath: this.filepath,
        userId: this.getUserId(),
      };

      SubmissionService.create(JSON.stringify(data))
        .then(() => {
          this.submitted = true;
          this.navigateListSubmissions();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    navigateListSubmissions() {
      router.push({ path: "/list" });
    },

    onUploadFile(path) {
      this.filepath = path;
    },

    onUploadClick(value) {
      this.displayForm = value;
    },

    navigateLoginUser() {
      router.push({ path: "/login" });
    },

    getUserId() {
      const user = JSON.parse(localStorage.getItem('user'));
      return user.userId;
    }
  },


  mounted() {
   /* AuthenticationService.checkLogin()
      .then(() => {
        console.log("ok");
      })
      .catch((e) => {
        console.log(e);
        this.navigateLoginUser();
      });*/
  },
};
</script>

<style scoped>
.candidate-form * {
  margin-bottom: 10px;
}
</style>

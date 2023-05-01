<template>
  <div class="mb-3">
    <label for="formFile" class="form-label">Add a CV</label>
    <input
      class="form-control"
      type="file"
      ref="file"
      @change="onChangeFileUpload"
    />
  </div>
</template>

<script>
import UploadFileService from "@/services/UploadFileService";

export default {
  name: "UploadFile",
  data() {
    return {
      file: "",
      path: "",
    };
  },

  methods: {
    onChangeFileUpload() {
      this.$emit("clicked", true);
      this.file = this.$refs.file.files[0];
      this.uploadFile();
    },

    uploadFile() {
      let formData = new FormData();
      formData.append("file", this.file);

      UploadFileService.upload(formData)
        .then((response) => {
          this.path = response.data;
          this.$emit("fileUploaded", this.path);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style scoped>
</style>

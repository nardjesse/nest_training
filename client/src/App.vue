<template>
  <nav class="navbar navbar-expand navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Candidate Submitter</a>

      <div class="">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/form">Add Candidate Profile</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/list">List of submissions</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<style lang="scss">

</style>

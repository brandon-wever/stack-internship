<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <h2>Register</h2>

  <div class="login-container">
    <div class="spacer"></div>
    <div class="form-body">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" v-model="email">
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" v-model="password">
      <label for="retypePassword">Retype Password:</label>
      <input type="password" id="retypePassword" name="retypePassword" v-model="retypePassword">
      <button @click="submit">Submit</button>
      <router-link to="/">Go to back if you already have account</router-link>
    </div>
    <div class="spacer"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
  name: 'Register',
  components: {

  },
  data() {
    return {
      email: "",
      password: "",
      retypePassword: ""
    }
  },
  methods: {
    submit() {
        alert(`Email: ${this.email}, Password: ${this.password}, Password: ${this.retypePassword}`);
    } 
  }
})
</script>

<style>
  .form-body {
    display: flex;
    flex-direction: column;
    flex: 3;
  }

  .login-container {
    display: flex;
    justify-content: space-between;
  }

  .spacer {
    flex: 4;
  }
</style>

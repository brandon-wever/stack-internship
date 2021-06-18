<template>
    <h2>Login</h2>

  <div class="login-container">
    <div class="spacer"></div>
    <form class="form-body">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" v-model="email">
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" v-model="password">
      <button @click="submit">Submit</button>
    </form>
    <div class="spacer"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
  name: 'Login',
  components: {

  },
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    submit() {
        alert(`Email: ${this.email}, Password: ${this.password}`);
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

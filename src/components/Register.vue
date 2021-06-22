<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <h2>Register</h2>

  <div class="login-container">
    <div class="spacer"></div>
    <div class="form-body">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" v-model="email">
      <!-- TODO: Show nice red error message below input when field is invalid after submitting -->
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
    isInputNotEmpty(input: string, label: string) {
        if (input.length === 0) {
            alert(`Please enter an ${label}`);
            return false;
        }

        return true;
    },
    submit() {
        if (this.isInputNotEmpty(this.email, 'email')) {
            return;
        }
        if (this.isInputNotEmpty(this.password, 'password')) {
            return;
        }
        if (this.isInputNotEmpty(this.retypePassword, 'retype password')) {
            return;
        }

        // TODO: Verify password and retype password are the same

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

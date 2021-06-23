<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <h2>Register</h2>

  <div class="login-container">
    <div class="spacer"></div>
    <div class="form-body">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" v-model="email">
      <label class="error-message" v-if="isInputEmpty(email) && doesFormHaveError"> email is required </label>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" v-model="password">
      <label class="error-message" v-if="isInputEmpty(password) && doesFormHaveError"> password is required </label>
      <label for="retypePassword">Retype Password:</label>
      <input type="password" id="retypePassword" name="retypePassword" v-model="retypePassword">
      <label class="error-message" v-if="isInputEmpty(retypePassword) && doesFormHaveError"> retyped password is required </label>
      <label class="error-message" v-if="password !== retypePassword && doesFormHaveError"> Passwords need to match </label>
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
      retypePassword: "",
      doesFormHaveError: false
    }
  },
  methods: {
    isInputEmpty(input: string, label: string = "") {
        if (input.length === 0) {
            label ? alert(`Please enter an ${label}`) : null;
            return true;
        }

        return false;
    },
    submit() {
        if (this.isInputEmpty(this.email, 'email')) {
            this.doesFormHaveError = true;
            return;
        }
        if (this.isInputEmpty(this.password, 'password')) {
            this.doesFormHaveError = true;
            return;
        }
        if (this.isInputEmpty(this.retypePassword, 'retype password')) {
            this.doesFormHaveError = true;
            return;
        }

        if(this.password !== this.retypePassword) {
            alert('Please make sure password matched retype password');
            this.doesFormHaveError = true;
            return;
        }

        this.doesFormHaveError = false;

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

  .error-message{
      color: red;
  }
</style>

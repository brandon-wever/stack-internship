<template>
    <h2>Login</h2>

    <form>
      <label for="email">Email:</label><br>
      <input type="email" id="email" name="email" v-model="email"><br>
      <label for="password">Password:</label><br>
      <input type="password" id="password" name="password" v-model="password"><br><br>
      <button @click="submit">Submit</button>
    </form>
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

</style>

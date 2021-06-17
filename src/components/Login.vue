<template>
    <h2>Login</h2>

    <form>
        <label for="fname">Email:</label><br>
        <input type="email" id="email" name="email"><br>
        <label for="lname">Password:</label><br>
        <input type="password" id="password" name="password"><br><br>
        <input type="submit" value="Submit">
    </form> 
</template>

<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
  name: 'Login',
  components: {
    
  }
})
</script>

<style>

</style>

import { createApp } from 'vue'
import * as VueRouter from 'vue-router';
import App from './App.vue'

// 1. Define route components.
import LoginVue from './components/Login.vue';
import RegisterVue from './components/Register.vue';

// 2. Define some routes
// Each route should map to a component.
const routes = [
  { path: '/', component: LoginVue },
  { path: '/register', component: RegisterVue},
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here
const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. 
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
})

// 5. Create and mount the root instance.
const app = createApp(App)
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')

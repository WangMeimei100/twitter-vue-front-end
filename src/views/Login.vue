<template>
  <div id="login" class="d-flex flex-column mx-auto">
    <div class="logo mx-auto mb-4">
      <img :src="require('./../assets/pictures/logo.png')" width="50px" />
    </div>
    <p class="menu-text mx-auto mb-4">登入 Alphitter</p>
    <LoginForm />
    <div class="text-end">
      <router-link to="/register" class="mx-auto text-blue"
        >註冊 Alphitter</router-link
      >
      <span class="space">．</span>
      <router-link to="/setting" class="mx-auto text-blue"
        >後台登入
      </router-link>
    </div>
  </div>
</template>

<script>
import LoginForm from "./../components/LoginForm";

export default {
  name: "Login",
  components: {
    LoginForm,
  },
};
</script>

<style scoped>
#login {
  width: 540px;
  padding-top: 60px;
}
.menu-text {
  font-size: 1.5rem;
}
</style>
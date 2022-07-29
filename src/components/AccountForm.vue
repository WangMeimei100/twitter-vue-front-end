<template>
  <div id="register" class="d-flex flex-column mx-auto">
    <div class="logo mx-auto mb-4">
      <img :src="require('./../assets/pictures/logo.png')" width="50px" />
    </div>
    <p class="title mx-auto mb-4">建立你的帳號</p>
    <form class="mx-auto w-100" action="">
      <div class="form-input d-flex flex-column">
        <label for="account" class="form-input-text">帳號</label>
        <input
          type="text"
          name="account"
          id="account"
          v-model="account"
          placeholder="請輸入帳號"
          required
        />
      </div>
      <div class="form-input d-flex flex-column">
        <label for="name" class="form-input-text">名稱</label>
        <input
          type="text"
          name="name"
          id="name"
          v-model="name"
          placeholder="請輸入使用者名稱"
          required
        />
      </div>
      <div class="form-input d-flex flex-column">
        <label for="email" class="form-input-text">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          v-model="email"
          placeholder="請輸入帳號"
          required
        />
      </div>
      <div class="form-input d-flex flex-column">
        <label for="password" class="form-input-text">密碼</label>
        <input
          type="password"
          name="password"
          id="password"
          v-model="password"
          placeholder="請設定密碼"
          required
        />
        <div class="d-flex justify-content-between"></div>
      </div>
      <div class="form-input d-flex flex-column">
        <label for="passwordCheck" class="form-input-text">密碼確認</label>
        <input
          type="passwordCheck"
          name="passwordCheck"
          id="passwordCheck"
          v-model="passwordCheck"
          placeholder="請再次輸入密碼"
          required
        />
        <div class="d-flex justify-content-between"></div>
      </div>
      <button
        type="submit"
        @click.stop.prevent="handleSubmit"
        class="btn btn-bg btn-356-50 w-100 mb-3"
      >
        註冊
      </button>
      <div class="text-center mb-5">
        <router-link to="/login" class="mx-auto text-blue">取消 </router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: "",
      name: "",
      email: "",
      password: "",
      passwordCheck: "",
    };
  },
  methods: {
    handleSubmit() {
      // todo: 串接後端，將註冊的資料送到後端
      // todo: 若有未正確填寫的，要跳出提示框
      if (
        !this.account ||
        !this.name ||
        !this.email ||
        !this.password ||
        !this.passwordCheck
      ) {
        console.log("請確實填寫每一個欄位");
        return;
      }
      //註冊成功，跳回登入頁
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
#register {
  width: 540px;
  padding-top: 60px;
}
.title {
  font-size: 1.5rem;
}
.btn {
  margin-top: 40px;
  margin-bottom: 22px;
}
</style>

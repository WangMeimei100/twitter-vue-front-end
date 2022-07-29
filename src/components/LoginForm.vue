<template>
  <form class="mx-auto w-100" action="" @submit.prevent.stop="handleSubmit">
    <div class="form-input d-flex flex-column">
      <label for="account" class="form-input-text">帳號</label>
      <input
        type="text"
        name="account"
        id="account"
        v-model.trim="account"
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
        placeholder="請輸入密碼"
        required
      />
      <div class="d-flex justify-content-between"></div>
    </div>
    <button
      type="submit"
      class="btn btn-bg btn-356-50 w-100 mb-3"
      :disabled="isProcessing"
    >
      登入
    </button>
  </form>
</template>

<script>
const dummyData = {
  user: {
    id: 14,
    account: "user1",
    name: "user1",
    email: "user1@example.com",
    avatar: null,
    introduction: null,
    role: "user",
    createdAt: "2022-07-29T04:24:05.000Z",
    updatedAt: "2022-07-29T04:24:05.000Z",
  },
};
export default {
  data() {
    return {
      user: {
        id: -1,
        account: "",
        name: "",
        email: "",
        avatar: "",
        introduction: "",
        role: "",
        isAdmin: false,
      },
      isProcessing: false,
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      this.user = {
        ...this.user,
        ...dummyData.user,
      };
    },
    handleSubmit() {
      const data = JSON.stringify({
        account: this.account,
        password: this.password,
      });
      // TODO: 向後端驗證使用者登入資訊是否合法
      console.log("data", data);
    },
  },
};
</script>

<style scoped>
.space {
  font-size: 16px;
  font-weight: 400;
  color: #0062ff;
}
.btn {
  margin-top: 40px;
  margin-bottom: 22px;
}
</style>

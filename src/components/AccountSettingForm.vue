<template>
  <form class="mx-auto w-100" action="" @submit.prevent.stop="handleSubmit">
    <div class="form-input d-flex flex-column">
      <label for="account" class="form-input-text">帳號</label>
      <input
        type="text"
        name="account"
        id="account"
        :class="{ error: isAccountTooLong }"
        @input="isAccountTooLong = false"
        v-model="user.account"
        placeholder="請輸入帳號"
        required
      />
      <span v-if="isAccountTooLong" class="error-message mx-3"
        >帳號不可超過 20 字！</span
      >
    </div>
    <div class="form-input d-flex flex-column">
      <label for="name" class="form-input-text">名稱</label>
      <input
        type="text"
        name="name"
        id="name"
        :class="{ error: isNameTooLong }"
        @input="isNameTooLong = false"
        v-model="user.name"
        placeholder="請輸入使用者名稱"
        required
      />
      <span v-if="isNameTooLong" class="error-message mx-3"
        >名稱不可超過 50 字！</span
      >
    </div>
    <div class="form-input d-flex flex-column">
      <label for="email" class="form-input-text">Email</label>
      <input
        type="text"
        name="email"
        id="email"
        v-model="user.email"
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
        v-model="user.password"
        placeholder="請設定密碼"
        required
      />
      <div class="d-flex justify-content-between"></div>
    </div>
    <div class="form-input d-flex flex-column">
      <label for="checkPassword" class="form-input-text">密碼確認</label>
      <input
        type="password"
        name="checkPassword"
        id="checkPassword"
        v-model="user.checkPassword"
        placeholder="請再次輸入密碼"
        required
      />
      <div class="d-flex justify-content-between"></div>
    </div>
    <div class="d-flex justify-content-end">
      <button type="submit" class="btn-bg btn-border" :disabled="isProcessing">
        {{ isProcessing ? "處理中..." : "儲存" }}
      </button>
    </div>
  </form>
</template>

<script>
import { mapState } from "vuex";
import { Toast } from "../utils/helpers";
import authorizationAPI from "../apis/authorization";

export default {
  data() {
    return {
      user: {
        account: "",
        name: "",
        email: "",
        password: "",
        checkPassword: "",
      },
      isNameTooLong: false,
      isAccountTooLong: false,
      isProcessing: false,
    };
  },
  created() {
    this.user = this.currentUser;
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    async handleSubmit() {
      try {
        // 若任一欄位沒填，防止請求送出
        if (
          !this.user.account ||
          !this.user.name ||
          !this.user.email ||
          !this.user.password ||
          !this.user.checkPassword
        ) {
          Toast.fire({
            icon: "warning",
            title: "請填寫所有欄位",
          });
          return;
        }

        // 若兩次密碼不同，清空密碼欄並防止請求送出
        if (this.user.password !== this.user.checkPassword) {
          Toast.fire({
            icon: "warning",
            title: "兩次輸入密碼不同，請重新輸入",
          });
          this.user.password = "";
          this.user.checkPassword = "";
          return;
        }

        // 帳號超過 20 字，防止請求送出
        if (this.user.account.length > 20) {
          this.isAccountTooLong = true;
          return;
        }

        // 名稱超過 50 字，防止請求送出
        if (this.user.name.length > 50) {
          this.isNameTooLong = true;
          return;
        }

        // 暫時關閉按鈕
        this.isProcessing = true;

        const response = await authorizationAPI.editUserData(
          this.currentUser.id,
          {
            account: this.user.account,
            name: this.user.name,
            email: this.user.email,
            password: this.user.password,
            checkPassword: this.user.checkPassword,
          }
        );

        if (response.data.status === "error") {
          throw new Error(response.data.message);
        }

        Toast.fire({
          icon: "success",
          title: "更改成功！",
        });
        // 重新開啟按鈕
        this.isProcessing = false;

      } catch (error) {
        this.isProcessing = false;
        console.error(error.response.data.message);
        switch (error.response.data.message) {
          case "Error: The account has already been used by someone else.":
            Toast.fire({
              icon: "error",
              title: "account 已重複註冊！",
            });
            break;
          case "Error: The email has already been used by someone else.":
            Toast.fire({
              icon: "error",
              title: "email 已重複註冊！",
            });
            break;
        }
      }
    },
  },
};
</script>

<style scoped>
form {
  padding: 1.5rem;
}

button {
  border-radius: 50px;
  margin-top: 40px;
  padding: 8px 24px 8px 24px;
}

.form-input:nth-child(5) {
  margin-bottom: 0rem;
}

.error-message {
  color: var(--danger-color);
}

.error {
  border-bottom: 2px solid var(--danger-color);
}
</style>
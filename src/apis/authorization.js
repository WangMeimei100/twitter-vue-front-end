import { apiHelper } from './../utils/helpers'

export default {
  // 帶入需要的參數
  loginIn ({ account, password }) {
    // 這裡 return 的會是一個 Promise
    return apiHelper.post('/users/signin', {
      account,
      password
    })
  },
  register({ account, name, email, password, checkPassword }) {
    // 這裡 return 的會是一個 Promise
    return apiHelper.post('/users', {
      account,
      name,
      email,
      password,
      checkPassword
    })
  },
}
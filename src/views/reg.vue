<template lang="html">
  <div class="pages-reg">
    <div class="reg-main">
      <span class="fa fa-user-o reg-logo"></span>
      <a-input
      :placeholder='formName.placeholderName'
      v-model='regData.name'>
      </a-input>
      <a-input
      :placeholder='formUserName.placeholderUserName'
      v-model='regData.userName'>
      </a-input>
      <a-input
      :placeholder='formPassword.placeholderPassword'
      :type='formPasswordR.type'
      v-model='regData.password'>
      </a-input>
      <a-input
      :placeholder='formPasswordR.placeholderPasswordR'
      :type='formPasswordR.type'
      v-model='formPasswordR.value'>
      </a-input>
      <div class="reg-main-opera">
        <a-button
        @click='goLogin'>前往登入</a-button>
        <a-button
        @click='reg'>注册</a-button>
      </div>
    </div>
  </div>
</template>

<script>
import AButton from '../components/abutton'
import AInput from '../components/ainput'
import { reg } from '../api/user'
export default {
  components: {
    AButton,
    AInput
  },
  data() {
    return {
      formName: {
        placeholderName: '姓名',
        value: ''
      },
      formUserName: {
        placeholderUserName: '用户名（登入账号）',
        value: ''
      },
      formPassword: {
        placeholderPassword: '密码',
        type: 'password',
        value: ''
      },
      formPasswordR: {
        placeholderPasswordR: '确认密码',
        type: 'password',
        value: ''
      },
      regData: {
        name: '',
        userName: '',
        password: ''
      },
      verification: true
    }
  },
  methods: {
    goLogin() {
      this.$router.push({ path: '/' })
    },
    reg() {
      if (this.regData.name === '') {
        window.alert('姓名未填写')
        return
      }
      if (this.regData.userName === '') {
        window.alert('用户名未填写')
        return
      }
      if (this.regData.password !== this.formPasswordR.value) {
        window.alert('两次密码输入不同')
        return
      }
      if (this.regData.password === '') {
        window.alert('密码填写')
        return
      }
      reg(this.regData)
      .then(res => {
        console.log(res.data.msg)
      })
      .catch(res => {
        console.log(res.data)
      })
    }
  }
}
</script>

<style lang="scss">
  .pages-reg {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .reg-main {
      padding: 60px 30px;
      border-radius: 6px;
      box-shadow: 0px 0px 10px 1px #ececec;
      display: flex;
      flex-direction: column;
      align-items: center;

      .reg-logo {
        font-size: 50px;
      }

      input {
        margin-top: 20px;
        width: 300px;
      }

      .reg-main-opera {
        margin: 20px;
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>

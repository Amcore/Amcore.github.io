<template lang="html">
  <div class="pages-login">
    <div class="login-main">
      <img
      src="../assets/logo.png"
      alt="zero"
      class="logo" />
      <a-input
      :placeholder='localForm.placeholderOne'
      v-model='userData.userName'>
      </a-input>
      <a-input
      :placeholder='localForm.placeholderTwo'
      :type='localForm.typeTwo'
      v-model='userData.password'>
      </a-input>


      <div class="login-main-opera">
        <a-button
        @click='login'>登入</a-button>
      </div>
    </div>

  </div>
</template>

<script>
import AButton from '../components/abutton'
import ATest from '../components/test'
import AInput from '../components/ainput'
import { login } from '../api/user'
export default {
  data() {
    return {
      localForm: {
        placeholderOne: '账号',
        placeholderTwo: '密码',
        typeTwo: 'password'
      },
      userData: {
        userName: '',
        password: ''
      },
      content: '',
      config: {
        width: '200px',
        height: '180px',
        background: '#ddd'
      },
      test: 0
    }
  },

  components: {
    AButton,
    AInput,
    ATest
  },
  mounted() {
  },

  methods: {
    testClick() {
      this.test++
      this.some()
    },
    goReg() {
      this.$router.push({ path: '/reg' })
    },
    login() {
      if (this.userData.userName === '') {
        this.$message('请输入用户名！')
        return
      }
      if (this.userData.password === '') {
        this.$message('请输入密码！')
        return
      }
      login(this.userData)
      .then(res => {
        if (res.data.code === 0) {
          window.localStorage.nickName = res.data.user.nickname
          this.$message(res.data.msg)
          this.$router.push('/project')
        } else {
          this.$message(res.data.msg)
        }
      })
      .catch(res => {
        console.log(res.data)
      })
    },
    some() {
      console.log(132)
      var collection = {
        2548: {
          album: 'Slippery When Wet',
          artist: 'Bon Jovi',
          tracks: [
            'Let It Rock',
            'You Give Love a Bad Name'
          ]
        },
        2468: {
          album: '1999',
          artist: 'Prince',
          tracks: [
            '1999',
            'Little Red Corvette'
          ]
        },
        1245: {
          artist: 'Robert Palmer',
          tracks: [ ]
        },
        5439: {
          album: 'ABBA Gold'
        }
      }
      var collectionCopy = JSON.parse(JSON.stringify(collection))
      function update(id, prop, value) {
        if (value !== '' && prop !== 'tracks') {
          collectionCopy[id][prop] = value
        }
        if (value !== '' && prop === 'tracks') {
          collectionCopy[id][prop].push(value)
        }
        if (value === '') {
          delete collectionCopy[id][prop]
        }
        return collection
      }
      console.log(update(5439, 'artist', 'ABBB'))
    }
  }
}
</script>

<style lang="scss">
@import '../assets/style/var.scss';
 .pages-login {
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;

   .login-main {
     padding: 60px 30px;
     border-radius: 6px;
     box-shadow: 0px 0px 10px 1px #ececec;
     display: flex;
     flex-direction: column;
     align-items: center;

     .logo {
       width: 50px;
       height: 50px;
     }
     input {
       margin-top: 20px;
       width: 300px;
     }

     .login-main-opera {
       margin: 20px;
       width: 100%;
       display: flex;
       justify-content: space-between;
     }
   }
 }
</style>

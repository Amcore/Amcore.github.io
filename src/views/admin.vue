<template>
  <div class="admin">
    <div class="admin-table">
      <table>
        <thead>
          <tr>
            <td>姓名</td>
            <td>电话</td>
            <td>用户名</td>
            <td>密码</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for='admin in admins'>
            <td v-text='admin.name'></td>
            <td v-text='admin.phone'></td>
            <td v-text='admin.username'></td>
            <td v-text='admin.password'></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { getAdminList } from '../api/user'
export default {
  data() {
    return {
      admins: [{
        name: 'zero',
        phone: '17787813921',
        username: 'zero',
        password: 'zero'
      }]
    }
  },

  mounted() {
    this.getAdminList()
  },

  methods: {
    getAdminList() {
      getAdminList()
      .then(res => {
        console.log(res.data.msg)
        this.admins = res.data.list
      })
      .catch(err => {
        throw err
      })
    }
  }
}
</script>

<style lang="scss">
  .admin {
    width: 100%;
    height: 100%;
    font-size: 1.4rem;
    display: flex;

    .admin-table {
      background: #fff;
      flex: 1;
      margin: 20px;

      table {
        width: 100%;

        thead {
          tr {
            display: flex;

            td {
              flex: 1;
              text-align: center;
              padding: 20px 0px;
              border: 1px solid #ececec;
            }
          }
        }

        tbody {
          tr {
            display: flex;

            td {
              flex: 1;
              text-align: center;
              padding: 20px 0px;
              border: 1px solid #ececec;
            }
          }
        }
      }
    }
  }
</style>

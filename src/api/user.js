import axios from 'axios'

const USERURL = 'http://localhost:3000/adminusers'
const USERREG = USERURL + '/reg'
const USERLOGIN = USERURL + '/login'
const ADMINLIST = USERURL + '/list'

function login(user) {
  return axios.post(USERLOGIN, user)
}

function test(user) {
  return axios.get(USERREG, user)
}

function reg (regInfor) {
  return axios.post(USERREG, regInfor)
}

function getAdminList() {
  return axios.get(ADMINLIST)
}

export { reg, login, test, getAdminList }

<template lang="html">
  <div class="calendar">
    <p v-text='today'></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      today: '',
      timeInterval: null,
      tme: ''
    }
  },

  mounted() {
    this.timeInterval = setInterval(this.date, 1000)
  },

  methods: {
    date() {
      let date = new Date()
      let year = date.getUTCFullYear()
      let month = date.getUTCMonth()
      let day = date.getUTCDate()
      let time = date.toLocaleTimeString()
      time = time.replace(/am/ig, '上午')
      time = time.replace(/pm/ig, '下午')
      this.today = `${year}年${month + 1}月${day}号  ${time}`
    }
  },

  computed: {
  }
}
</script>

<style lang="scss">
@import '../assets/styles/var.scss';
  .calendar {

  }
</style>

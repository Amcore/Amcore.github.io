<template lang="html">
  <div class="pages-test">

    <span> {{ count }}</span>
    <button
    @click='increment'>
      <span class="fa fa-plus"></span>
    </button>
    <button
    @click='decrement'>
      <span class="fa fa-minus"></span>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      icon: 'user'
    }
  },

  computed: {
    ...mapGetters({
      count: 'counter/GET_COUNT'
    })
  },

  mounted() {

  },

  methods: {
    test(x, y) {
      console.log(x, y)
    },
    ...mapActions({
      'increment': 'counter/INCREMENT',
      'decrement': 'counter/DECREMENT'
    })
  }
}
</script>

<style lang="scss">
  .pages-test {
    height: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

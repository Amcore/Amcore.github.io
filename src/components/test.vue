<template lang="html">
  <div @click='handleClick'>
    <h1>this is test template</h1>
  </div>
</template>

<script>
export default {

  methods: {
    handleClick(ev) {
      this.$emit('click', ev)
    }
  }

}
</script>

<style lang="scss">
</style>

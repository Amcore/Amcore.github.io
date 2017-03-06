<template lang="html">
  <div class="am-load">
    <am-icon name="loading"></am-icon>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .am-load {
    position: absolute;
    height: 100%;
    width: 100%;
    background: rgba(255, 255, 255, .9);
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: .5rem;
      height: .5rem;
      fill: #007fff;
      animation: loadAnimation 1s linear infinite;
    }
    @keyframes loadAnimation {
      from {
        transform:rotate(0deg);
        -ms-transform:rotate(0deg); 	/* IE 9 */
        -moz-transform:rotate(0deg); 	/* Firefox */
        -webkit-transform:rotate(0deg); /* Safari 和 Chrome */
        -o-transform:rotate(0deg);
      }
      to {
        transform:rotate(360deg);
        -ms-transform:rotate(360deg); 	/* IE 9 */
        -moz-transform:rotate(360deg); 	/* Firefox */
        -webkit-transform:rotate(360deg); /* Safari 和 Chrome */
        -o-transform:rotate(360deg);
      }
    }
  }
</style>

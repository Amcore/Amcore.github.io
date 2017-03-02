<template lang="html">
  <div
  :class="{ 'a-upload': true, 'a-upload-img': img}"
  :style="{ 'background-image': `url(${img})`}">
    <button
    v-show='!img'
    type="button"
    name="button">
    <span class="fa fa-plus">
    </span>
    </button>
    <input
    type='file'
    @change='changeImg($event)'>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: ''
    }
  },
  methods: {
    changeImg(ev) {
      const fileImg = ev.target.files[0]
      const imgUrl = window.URL.createObjectURL(fileImg)
      this.img = imgUrl
    }
  }
}
</script>

<style lang="scss">
  .a-upload {
    border: 2px dotted #ececec;
    display: flex;
    width: 100%;
    min-height: 300px;
    justify-content: center;
    align-items: center;
    position: relative;

    &.a-upload-img {
      border: none;
      border-radius: 6px;
      background-position: center;
      background-repeat: no-repeat;
      background-origin: border-box;
      background-size: cover;
    }

    &.a-upload-img:hover {
      opacity: 0.9;
    }

    button {
      border: none;
      border-radius: 50%;
      font-size: 3rem;
      background: #ececec;
    }
    img {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    input {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
    }
  }
</style>

<template lang="html">
  <div class="commodity-detail">

    <div class="upload-constainer">
      <a-upload><a-upload>
    </div>

    <div class="commodity-info">

      <label for="name">名称</label>
      <a-input
      :value='name'>
      </a-input>

      <label for="price">价格</label>
      <a-input
      :value='price'>
      </a-input>

    </div>
  </div>
</template>

<script>
import AUpload from '../components/aupload'
import AInput from '../components/ainput'
export default {
  components: {
    AUpload,
    AInput
  },
  data() {
    return {
      name: '',
      price: ''
    }
  }
}
</script>

<style lang="scss">
  .commodity-detail {
    background: #fff;
    margin: 20px;
    height: 100%;
    border-radius: 6px;
  }
  .upload-constainer {
    padding: 20px;
    display: flex;
    justify-content: center;
  }
  .commodity-info {
    padding: 0px 20px;

    label {
      display: block;
      margin-top: 20px;
      margin-bottom: 1rem;
      font-size: 1.4rem;
    }

    input {

    }
  }
</style>

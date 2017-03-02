<template lang="html">
  <div class="pages-input">
    <input
    :id='id'
    :type='type'
    :value='currentValue'
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    @input='handleInput'
    @focus='handleFocus'
    @change='handleChange'>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentValue: this.value
    }
  },
  props: {
    placeholder: String,
    readonly: Boolean,
    disabled: Boolean,
    id: String,
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  computed: {
  },
  methods: {
    handleInput(event) {
      this.setCurrentValue(event.target.value)
    },
    setCurrentValue(value) {
      if (value === this.currentValue) return
      this.currentValue = value
      this.$emit('input', value)
    },
    handleFocus(ev) {
      this.$emit('focus', ev)
    },
    handleChange(ev) {
      this.$emit('change', ev)
    }
  },
  watch: {
    'value'(val, oldValue) {
      this.setCurrentValue(val)
    }
  }
}
</script>

<style lang="scss">
@import '../assets/style/var.scss';
  .pages-input {

    input {
      border: 1px solid #ececec;
      border-radius: 5px;
      padding: 3px 10px;
      height: 30px;
      width: 100%;
      box-sizing: border-box;
    }
    input:hover {
      border-color: $primeColor;
    }
    input:focus {
      border-color: $deepPrimeColor;
    }
  }
</style>

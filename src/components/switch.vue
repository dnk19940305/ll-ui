<template>
  <div class="ll-switch" :class="{'is-checked':value}" @click="handleClick">
    <span class="ll-switch__core" ref="core">
      <span class="ll-switch__button"></span>
    </span>
    <input :name="name" type="checkbox" class="ll-switch__input" ref="input">
  </div>
</template>

<script>
export default {
  name: 'LlSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    async handleClick () {
      this.$emit('input', !this.value)
      await this.$nextTick()
      this.setStyle()
      this.$refs.input.value = this.value
    },
    setStyle () {
      if (this.activeColor || this.inactiveColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  },
  mounted () {
    this.setStyle()
    this.$refs.input.value = this.value
  }
}
</script>

<style lang="scss">
.ll-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .ll-switch__input{
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .ll-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    .ll-switch__button {
      content: "";
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
.ll-switch.is-checked {
  .ll-switch__core{
    border-color: #409eff;
    background-color: #409eff;
    .ll-switch__button{
      transform: translateX(20px);
    }
  }
}
</style>

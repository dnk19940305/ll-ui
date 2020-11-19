<template>
  <div class="ll-input" :class="{'ll-input--suffix':showSuffix}">
    <input
      :type="showPassword ? (passwordVisiable ? 'text':'password') : type"
      class="ll-input__inner"
      :class="{'is-disabled':disabled}"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="hanldeInput"
      :value="value"
      />
    <span class="ll-input__suffix" v-if="showSuffix">
      <i class="ll-input__icon ll-icon-roundclose" v-if="clearable && value" @click="clear"></i>
      <i class="ll-input__icon ll-icon-view" v-if="showPassword && value"
        :class="{'ll-icon-view-active': passwordVisiable}"
        @click="handlePassword"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'LlInput',
  data () {
    return {
      passwordVisiable: false
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showSuffix () {
      return this.showPassword || this.clearable
    }
  },
  methods: {
    hanldeInput (e) {
      this.$emit('input', e.target.value)
    },
    clear () {
      this.$emit('input', '')
    },
    handlePassword () {
      this.passwordVisiable = !this.passwordVisiable
    }
  }
}
</script>

<style lang="scss">
.ll-input{
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%;
    .ll-input__inner{
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      border-radius: 4px;
      border: 1px solid #dcdfe6;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      outline: none;
      padding: 0 15px;
      transition: border-color .2s cubic-bezier(.645,.045,.355,1);
      width: 100%;
      &:focus{
        outline: none;
        border-color: #409eff;
      }
      &.is-disabled{
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        color: #c0c4cc;
        cursor: not-allowed;
      }
    }
    .ll-input__suffix {
      position: absolute;
      height: 100%;
      right: 5px;
      top: 0;
      text-align: center;
      color: #c0c4cc;
      transition: all .3s;
      pointer-events: all;
      .ll-input__icon {
        width: 25px;
        line-height: 40px;
      }
    }
    .ll-icon-roundclose-active{

    }
}
.ll-input--suffix .ll-input__inner {
    padding-right: 30px;
}
.ll-input__icon, .ll-input__prefix {
    height: 100%;
    text-align: center;
    transition: all .3s;
}
</style>

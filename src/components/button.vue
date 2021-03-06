<template>
  <button class="ll-button" :class="[`ll-button--${type}`,
  {
    'is-plain':plain,
    'is-round':round,
    'is-circle':circle,
    'is-disabled':disabled
  }]"
  :disabled = "disabled"
  @click="handleClick">
    <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default"><slot> </slot></span>
  </button>
</template>

<script>
export default {
  name: 'LlButton',
  props: {
    type: {
      type: String,
      default: ''
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.ll-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-sllect: none;
    -webkit-user-sllect: none;
    -ms-user-sllect: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    &:hover,
    &:focus{
      color: #409eff;
      border-color: #c6e2ff;
      background-color: #ecf5ff;
    }
}
.ll-button.is-plain{
  &:hover,
  &:focus{
    background: #fff;
    border-color: #409eff;
    color: #409eff;
  }
}
.ll-button.is-disabled, .ll-button.is-disabled:focus, .ll-button.is-disabled:hover {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
}
.ll-button--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    &:hover,
    &:focus{
      background: #66b1ff;
      border-color: #66b1ff;
      color: #fff;
    }
}
.ll-button--primary.is-plain {
    color: #409eff;
    background: #ecf5ff;
    border-color: #b3d8ff;
    &:hover,
    &:focus{
      background: #409eff;
      border-color: #409eff;
      color: #fff;
    }
}
.ll-button--primary.is-disabled, .ll-button--primary.is-disabled:active, .ll-button--primary.is-disabled:focus, .ll-button--primary.is-disabled:hover {
    color: #fff;
    background-color: #a0cfff;
    border-color: #a0cfff;
}
.ll-button--success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
    &:hover,
    &:focus{
      background: #85ce61;
      border-color: #85ce61;
      color: #fff;
    }
}
.ll-button--success.is-plain {
    color: #67c23a;
    background: #f0f9eb;
    border-color: #c2e7b0;
    &:hover,
    &:focus{
      background: #67c23a;
      border-color: #67c23a;
      color: #fff;
    }
}
.ll-button--success.is-disabled, .ll-button--success.is-disabled:active, .ll-button--success.is-disabled:focus, .ll-button--success.is-disabled:hover {
    color: #fff;
    background-color: #b3e19d;
    border-color: #b3e19d;
}
.ll-button--info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
    &:hover,
    &:focus{
      background: #a6a9ad;
      border-color: #a6a9ad;
      color: #fff;
    }
}
.ll-button--info.is-plain {
    color: #909399;
    background: #f4f4f5;
    border-color: #d3d4d6;
    &:hover,
    &:focus{
      background: #909399;
      border-color: #909399;
      color: #fff;
    }
}
.ll-button--info.is-disabled, .ll-button--info.is-disabled:active, .ll-button--info.is-disabled:focus, .ll-button--info.is-disabled:hover {
    color: #fff;
    background-color: #c8c9cc;
    border-color: #c8c9cc;
}
.ll-button--warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
    &:hover,
    &:focus{
      background: #ebb563;
      border-color: #ebb563;
      color: #fff;
    }
}
.ll-button--warning.is-plain {
    color: #e6a23c;
    background: #fdf6ec;
    border-color: #f5dab1;
    &:hover,
    &:focus{
      color: #fff;
      background-color: #e6a23c;
      border-color: #e6a23c;
    }
}
.ll-button--warning.is-disabled, .ll-button--warning.is-disabled:active, .ll-button--warning.is-disabled:focus, .ll-button--warning.is-disabled:hover {
    color: #fff;
    background-color: #f3d19e;
    border-color: #f3d19e;
}
.ll-button--danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    &:hover,
    &:focus{
      background: #f78989;
      border-color: #f78989;
      color: #fff;
    }
}
.ll-button--danger.is-plain {
    color: #f56c6c;
    background: #fef0f0;
    border-color: #fbc4c4;
    &:hover,
    &:focus{
      background: #f56c6c;
      border-color: #f56c6c;
      color: #fff;
    }
}
.ll-button--danger.is-disabled, .ll-button--danger.is-disabled:active, .ll-button--danger.is-disabled:focus, .ll-button--danger.is-disabled:hover {
    color: #fff;
    background-color: #fab6b6;
    border-color: #fab6b6;
}
.ll-button.is-round {
    border-radius: 20px;
    padding: 12px 23px;
}
.ll-button.is-circle {
    border-radius: 50%;
    padding: 12px;
}
.ll-button [class*=ll-icon-]+span{
  margin-left: 5px;
}
</style>

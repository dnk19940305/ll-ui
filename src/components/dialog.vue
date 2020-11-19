<template>
  <transition name="dialog-fade">
      <div v-if="visiable" class="ll-dialog__warpper" @click.self="handleClose">
      <div class="ll-dialog" :style="{ width, marginTop: top}">
        <div class="ll-dialog__header">
          <slot name="title">
            <span class="ll-dialog__title">{{title}}</span>
          </slot>
          <button @click="handleClose" class="ll-dialog__headerbtn">
            <i class="ll-dialog__close ll-icon-close"></i>
          </button>
        </div>
        <div class="ll-dialog__body">
          <slot></slot>
        </div>
        <div class="ll-dialog__footer" v-if='$slots.footer'>
          <span class="dialog-footer">
            <slot name="footer"></slot>
          </span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'LlDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visiable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:visiable', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.ll-dialog__warpper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
    z-index: 2011;
    background-color: rgba($color: #000000, $alpha: 0.5);
    .ll-dialog {
      position: relative;
      margin: 15vh auto 50px;
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0 1px 3px rgba(0,0,0,.3);
      box-sizing: border-box;
      width: 30%;
      &__header {
        padding: 20px 20px 10px;
        .ll-dialog__title {
          line-height: 24px;
          font-size: 18px;
          color: #303133;
        }
        .ll-dialog__headerbtn{
          position: absolute;
          top: 20px;
          right: 20px;
          padding: 0;
          background: transparent;
          border: none;
          outline: none;
          cursor: pointer;
          font-size: 16px;
        }
      }
      &__body{
        padding: 30px 20px;
        color: #606266;
        font-size: 14px;
        word-break: break-all;
      }
      &__footer{
        padding: 10px 20px 20px;
        text-align: right;
        box-sizing: border-box;
        .dialog-footer {
          ::v-deep .ll-button:first-child{
              margin-right: 10px;
            }
        }
      }
    }
}
.dialog-fade-enter-active{
animation: fade .3s;
}
.dialog-fade-leave-active{
animation: fade .3s reverse;

}
@keyframes fade {
  0%{
    opacity: 0;
    transform: translateY(-10px);
  }
   100%{
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

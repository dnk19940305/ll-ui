<template>
  <div id="app">
    <ll-button type='primary' @click="visiable=true">点击展示dialog</ll-button>
    <ll-dialog :visiable.sync="visiable">
      <template v-slot:title>
        <h3>我是插槽标题</h3>
      </template>
      <template v-slot:footer>
       <ll-button @click="visiable=false" plain>取消</ll-button>
       <ll-button @click="visiable=false" type='primary'>确定</ll-button>
      </template>
    </ll-dialog>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      visiable: false
    }
  },
  components: {},
  methods: {
    handleClick () {
      console.log(123)
    }
  }
}
</script>

<style lang="scss">

</style>

<template>
  <div id="app">
    <ll-input clearable placeholder="请输入用户名" v-model="username" ></ll-input>
    <ll-input showPassword  type='password' v-model="password" placeholder="请输入密码" ></ll-input>
    <ll-switch active-color='red'  v-model="active"></ll-switch>
    <ll-switch active-color='red' inactive-color='lightgreen' v-model="active"></ll-switch>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      username: '123',
      password: '123',
      active: false
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
#app{
  .ll-input{
    width: 180px;
  }
}
</style>

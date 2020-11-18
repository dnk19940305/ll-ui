<template>
  <div id="app">
    <ul>
      <li>
        <Ll-button @click="handleClick" >按钮</Ll-button>
        <Ll-button type="primary">按钮</Ll-button>
        <Ll-button type="success">按钮</Ll-button>
        <Ll-button type="info">按钮</Ll-button>
        <Ll-button type="warning">按钮</Ll-button>
        <Ll-button type="danger">按钮</Ll-button>
      </li>
      <li>
        <Ll-button plain >按钮</Ll-button>
        <Ll-button plain type="primary">按钮</Ll-button>
        <Ll-button plain type="success">按钮</Ll-button>
        <Ll-button plain type="info">按钮</Ll-button>
        <Ll-button plain type="warning">按钮</Ll-button>
        <Ll-button plain type="danger">按钮</Ll-button>
      </li>
      <li>
        <Ll-button round >按钮</Ll-button>
        <Ll-button round type="primary">按钮</Ll-button>
        <Ll-button round type="success">按钮</Ll-button>
        <Ll-button round type="info">按钮</Ll-button>
        <Ll-button round type="warning">按钮</Ll-button>
        <Ll-button round type="danger">按钮</Ll-button>
      </li>
      <li>
        <Ll-button circle >按钮</Ll-button>
        <Ll-button circle type="primary">按钮</Ll-button>
        <Ll-button circle type="success">按钮</Ll-button>
        <Ll-button circle type="info">按钮</Ll-button>
        <Ll-button circle type="warning">按钮</Ll-button>
        <Ll-button circle type="danger">按钮</Ll-button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
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

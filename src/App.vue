<template>
<h1>Hello India</h1>
<HelloWorld msg="Amit"/>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue';
export default {
  name: 'App',
  components:{
    HelloWorld
  }
}
</script>
<style>
h1{
  margin:0
}
</style>
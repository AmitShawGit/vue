<template>
  <HelloWorld msg="my name is vue" />
  <About_page />
  <Event_Listener />
  <TwoWayBinding />
  </template>
  <script>
  import  HelloWorld  from "./components/HelloWorld.vue";
  import About_page from "./components/About.vue";
  import Event_Listener from './components/Event.vue';
  import TwoWayBinding from './components/TwoWayBinging.vue';
  export default {
  name: "App",
  components : {
    HelloWorld,
    About_page,
    Event_Listener,
    TwoWayBinding,
  }
  }
  </script>
  <style>
  </style>
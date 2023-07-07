<template>
  <HelloWorld msg="my name is vue" />
  <About_page />
  <Event_Listener />
 <TwoWayBinding />
<InputFields />
<ConditionalRen />
  </template>

  <script>
  import  HelloWorld  from "./components/HelloWorld.vue";
  import About_page from "./components/About.vue";
  import Event_Listener from './components/Event.vue';
 import TwoWayBinding from "./components/TwoWayBinding.vue";
 import InputFields from './components/InputFileds.vue';
 import ConditionalRen from './components/ConditionalRen.vue';

  export default {
  name: "App",
  components : {
    HelloWorld,
    About_page,
    Event_Listener,
    TwoWayBinding,
    InputFields,
  ConditionalRen,
}
  }
  </script>
  <style>
  </style>
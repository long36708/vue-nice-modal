<template>
  <NiceModalProvider>
    <ExampleDemo />
  </NiceModalProvider>
</template>

<script setup>
import { Provider as NiceModalProvider } from 'vue-nice-modal';
import ExampleDemo from './Example.vue';
</script>
<!--<script>-->
<!--// import { Provider as NiceModalProvider } from 'vue-nice-modal';-->
<!--export default {-->
<!--  name: 'App',-->
<!--  components: {-->
<!--    ExampleDemo,-->
<!--    // NiceModalProvider-->
<!--  },-->
<!--};-->
<!--</script>-->

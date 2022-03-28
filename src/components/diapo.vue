<script setup>
import { ref } from 'vue'



const props = defineProps({
  content: String
})
</script>



<template>
  <div id="diapoContainer">{{props.content}}</div>
</template>



<style scoped>
  #diapoContainer {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
</style>

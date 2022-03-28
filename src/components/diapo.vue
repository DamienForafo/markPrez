<script setup>
import { ref } from 'vue'



const props = defineProps({
  content: String
})
</script>



<template>
  {{props.content}}
</template>



<style scoped>

</style>

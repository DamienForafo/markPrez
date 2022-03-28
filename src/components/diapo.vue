<script setup>
import { ref, computed } from 'vue'

const emit = defineEmits(['quit']);

const props = defineProps({
  content: String
});


const page = ref(0);
function prev() { if (page.value > 0) page.value--; }
function next() { if (page.value < diapoContents.value.length) page.value++; }


const diapoContents = computed(() => {
    return props.content.split('<hr>');
});
const currentContent = computed(() => {
    return diapoContents.value[page.value];
});

</script>



<template>
  <div id="diapoContainer" v-html="currentContent"></div>
  <div id="prev" @click="prev"></div>
  <div id="next" @click="next"></div>
  <div id="quit" @click="() => emit('quit')"></div>
</template>



<style scoped>
  #diapoContainer {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: white;
  }
  #prev, #next, #quit {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    top: calc(50% - 15px);
    left: 50px;
    background: blue;
    position: absolute;
  }
  #next {
    left: auto;
    right: 50px;
  }
  #quit {
    top: 10px;
    left: auto;
    right: 10px;
    background: red;
  }
</style>

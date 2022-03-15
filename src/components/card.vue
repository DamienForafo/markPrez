<script setup>
    import { ref } from 'vue'


    const props = defineProps({
        title: String,
        description: String,
        duration: String,
        authors: String
    });


    const detailed = ref(false);

    function isDetailed() {
        detailed.value = true;
    }
    function isNotDetailed() {
        detailed.value = false;
    }
</script>


<template>
  <div id="card" @mouseenter="isDetailed()" @mouseleave="isNotDetailed()" :detailed="detailed">
      <p id="prezTitle">{{title}}</p>
      <div id="delete"></div>
      <p id="description">{{description}}</p>
      <p id="duration">{{duration}}</p>
      <p id="authors">{{authors}}</p>
  </div>
</template>



<style scoped>
    #card {
        width: 300px;
        background: orange;
        margin: 20px;
        position: relative;
        border-radius: 10px;
    }
    #card:hover {
        
    }
    #delete {
        width: 30px;
        height: 30px;
        position: absolute;
        top: 5px;
        right: 5px;
        background: rgba(255, 0, 0, 0.979);
        cursor: pointer;
        display: none;
    }
    #card[detailed=true] > #delete {
        display: block;
    }
    @media screen and (max-width: 400px) {
        #card {
            width: calc(100% - 30px);
            margin: 15px;
        }
    }
    @media screen and (max-width: 768px) {
        #delete {
            display: block;
        }
    }
    @media screen and (min-width: 769px) {
        #delete:hover {
            background: fuchsia;
        }
    }
</style>

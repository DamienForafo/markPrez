<script setup>
  import { ref, computed } from 'vue'
  import AddPrez from './components/addPrez.vue';
  import Card from './components/card.vue';
  import Diapo from './components/diapo.vue';


  const prezs = ref([]);
  

  const adding = ref(false);

  function isAdding() {
    adding.value = true;
    console.log(window);
    console.log('isAdding !');
  }
  function isNotAdding() {
    adding.value = false;
  }

  const diapoContent = ref('');

  function diapoBidon() {
    diapoContent.value = '<h1>Une diapo bidon</h1><hr><h1>Une seconde diapo bidon</h1><hr><h1>Une troisièem diapo bidon</h1>';
    fullscreenOn();
  }

  const diapoMode = computed(() => {
      return (diapoContent.value !== '');
  });

  function quit() {
    diapoContent.value = '';
  }

  function fullscreenOn() { window.electron.fullscreenOn(); }

  function removePrez(id) {
      console.log('vue asking removal of ' + path);
      window.electron.removePrez(path);
      console.log('vue asked removal of ' + path);
  }
</script>

<template>
  <div id="topBar">
    <p id="title">Markprez</p>
    <div id="addButton" @click="isAdding">
      <p>Ajouter une présentation</p>
    </div>
  </div>
  <div id="center">
    <Card id=0 title="prez" description="nimp" duration="3 min" authors="nimportequi, qqun" @delete="() => removePrez()" @click="diapoBidon" />
    <Card id=0 title="prez" description="nimp" duration="3 min" authors="nimportequi, qqun" @delete="() => removePrez()" />
    <Card id=0 title="prez" description="nimp" duration="3 min" authors="nimportequi, qqun" @delete="() => removePrez()" />
    <Card id=0 title="prez" description="nimp" duration="3 min" authors="nimportequi, qqun" @delete="() => removePrez()" />
    <Card id=0 title="prez" description="nimp" duration="3 min" authors="nimportequi, qqun" @delete="() => removePrez()" />
    <Card id=0 title="prez" description="nimp" duration="3 min" authors="nimportequi, qqun" @delete="() => removePrez()" />
    <Card id=0 title="prez" description="nimp" duration="3 min" authors="nimportequi, qqun" @delete="() => removePrez()" />
  </div>
  <AddPrez v-if="adding" @close="isNotAdding" />
  <Diapo v-if="diapoMode" :content="diapoContent" @quit="quit" />
</template>

<style>
  :root {
    --topBarHeight: 60px;
    --topBarBorderWidth: 2px;
    --leftOrRigthSpace: 10px;
  }
  html {
    height: 100%;
  }
  body {
    height: 100%;
    margin: 0;
    background: slategray;
  }
  #app {
    height: fit-content;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
  }
  #topBar {
    width: 100%;
    height: var(--topBarHeight);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: darkcyan;
    border-bottom: var(--topBarBorderWidth) solid red;
  }
  #addButton {
    position: absolute;
    left: var(--leftOrRigthSpace);
    background: lightcoral;
  }
  #title {
    background: peru;
  }
  #center {
    box-sizing: border-box;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    padding: 30px;
  }
  @media screen and (max-width: 600px) {
    #title {
      position: absolute;
      right: var(--leftOrRigthSpace);
    }
  }
  @media screen and (max-width: 400px) {
    #center {
      padding: 10px;
      flex-direction: column;
      align-content: center;
    }
  }
</style>
<script setup>
  import { ref } from 'vue'
  import AddPrez from './components/addPrez.vue';
  import Card from './components/card.vue';
  

  const adding = ref(false);

  function isAdding() {
    adding.value = true;
    console.log(window);
    console.log('isAdding !');
  }
  function isNotAdding() {
    adding.value = false;
  }

  function fullscreenOn() { window.electron.fullscreenOn(); }

function removePrez(event) {
    console.log('vue asking removal');
    window.electron.removePrez(toRemove);
    console.log('vue asked removal');
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
    <Card title="ballec" description="nimp" duration="3 min" authors="nimportequi, qqun" />
    <Card title="ballec" description="nimp" duration="3 min" authors="nimportequi, qqun" />
    <Card title="ballec" description="nimp" duration="3 min" authors="nimportequi, qqun" />
    <Card title="ballec" description="nimp" duration="3 min" authors="nimportequi, qqun" />
    <Card title="ballec" description="nimp" duration="3 min" authors="nimportequi, qqun" />
    <Card title="ballec" description="nimp" duration="3 min" authors="nimportequi, qqun" />
    <Card title="ballec" description="nimp" duration="3 min" authors="nimportequi, qqun" />
    <Card title="ballec" description="nimp" duration="3 min" authors="nimportequi, qqun" />
    <Card title="ballec" description="nimp" duration="3 min" authors="nimportequi, qqun" />
    <Card title="ballec" description="nimp" duration="3 min" authors="nimportequi, qqun" />
    <Card title="ballec" description="nimp" duration="3 min" authors="nimportequi, qqun" />
    <Card title="ballec" description="nimp" duration="3 min" authors="nimportequi, qqun" />
  </div>
  <AddPrez v-if="adding" @close="isNotAdding" />
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
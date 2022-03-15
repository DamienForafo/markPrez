<script setup>
import { ref } from 'vue'

const emit = defineEmits(['close']);

defineProps({
  show: Boolean
})


const paths = ref({
    md: '',
    css: '',
    config: '',
    env: [],
    assets: []
});


function mdChange(event) {
    paths.value.md = event.target.files[0].path;
}

function cssChange(event) {
    paths.value.css = event.target.files[0].path;
}

function configChange(event) {
    paths.value.config = event.target.files[0].path;
}

function envChange(event) {
    paths.value.env = event.target.files;
}

function assetsChange(event) {
    paths.value.assets = event.target.files;
}
</script>



<template>
    <div id="popupContainer">
        <div id="popup">
            <div id="closeButton" @click="() => emit('close')"></div>
            <form action="">
                <div id="mdInputDiv">
                    <p id="mdInputText">Fichier markdown</p>
                    <input id="mdInput" type="file" name="md" accept=".md" @change="mdChange"><br><br>
                </div>
                <div id="cssInputDiv">
                    <p id="cssInputText">Fichier CSS</p>
                    <input id="cssInput" type="file" name="css" @change="cssChange"><br><br>
                </div>
                <div id="configInputDiv">
                    <p id="configInputText">Fichier JSON</p>
                    <input id="configInput" type="file" name="config" @change="configChange"><br><br>
                </div>
                <div id="envInputDiv">
                    <p id="envInputText">Dossier d'environnement</p>
                    <input id="envInput" type="file" name="env" webkitdirectory multiple @change="envChange"> <br><br>
                </div>
                <div id="assetsInputDiv">
                    <p id="assetsInputText">Dossier des assets</p>
                    <input id="assetsInput" type="file" name="assets" webkitdirectory multiple @change="assetsChange"><br><br>
                </div>
                <input type="submit">
            </form>
        </div>
    </div>
</template>



<style scoped>
    #popupContainer {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #popup {
        width: 80%;
        height: 300px;
        background: indianred;
        border-radius: 20px;
        position: relative;
        overflow-y: auto;
    }
    #closeButton {
        width: 30px;
        height: 30px;
        border-radius: 15px;
        position: absolute;
        top: 10px;
        right: 10px;
        background: red;
    }
    @media screen and (max-width: 400px) {
        #popup {
            width: 100%;
            height: 100%;
        }
    }
</style>
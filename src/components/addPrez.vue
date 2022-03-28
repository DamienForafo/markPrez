<script setup>
import { ref, computed } from 'vue'

const emit = defineEmits(['close']);

defineProps({
  show: Boolean
});




const paths = ref({
    md: '',
    css: '',
    config: '',
    env: [],
    assets: []
});

const enoughFiles = computed(() => {
    const p = paths.value;
    return (p.md && p.config);
});



function mdChange(event) {
    paths.value.md = event.target.files[0].path;
    console.log(paths.value);
}

function cssChange(event) {
    paths.value.css = event.target.files[0].path;
    console.log(paths.value);
}

function configChange(event) {
    paths.value.config = event.target.files[0].path;
    console.log(paths.value);
}

function envChange(event) {
    const files = event.target.files;
    let filesPaths = [];
    for (let f in files) filesPaths.push(files[f].path);
    paths.value.env = filesPaths;
}

function assetsChange(event) {
    const files = event.target.files;
    let filesPaths = [];
    for (let f in files) filesPaths.push(files[f].path);
    paths.value.assets = filesPaths;
}

function validatePrez(event) {
    
}
</script>



<template>
    <div id="popupContainer">
        <div id="popup">
            <div id="popupHeader">
                <h3>Nouvelle présentation</h3>
                <p id="instruction">Importez au moins un fichier markdown et un fichier config</p>
            </div>
            <div id="closeButton" @click="() => emit('close')"></div>
            <div id="inputs">
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
            </div>
            <div id="popupFooter">
                <input type="submit" @click="validatePrez" :disabled="enoughFiles">
                <p v-if="enoughFiles" id="errorMsg">Vous devez fournir au mois un fichier .md et un fichier .config</p>
            </div>
        </div>
    </div>
</template>



<style scoped>
    h3, p {
        margin: 0;
    }
    #popupContainer {
        --headerHeight: 100px;
        --footererHeight: 100px;
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
        height: 70%;
        background: indianred;
        border-radius: 20px;
        position: relative;
        overflow: hidden;
    }
    #popupHeader {
        height: var(--headerHeight);
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
    #inputs {
        overflow-y: auto;
        height: calc(100% - var(--headerHeight) - var(--footererHeight));
    }
    #popupFooter {
        height: var(--footererHeight);
    }
    @media screen and (max-width: 400px) {
        #popup {
            width: 100%;
            height: 100%;
            max-height: 100%;
        }
    }
</style>
<template>
  <header class="container-fluid d-flex justify-content-between align-items-center">
    <h1>BOOLFLIX</h1>
    <div class="d-flex">
      <input type="text" class="form-control me-3" v-model="store.parmas.query" @keyup.enter="$emit('onSearch')">
      <button class="btn btn-danger" @click="$emit('onSearch')">Click</button>
    </div>
  </header>
</template>

<script>
import {store} from '../data/store'
  export default {
    name:'HeaderComponent',
    data(){
      return{
        store
      }
    }
  }
</script>

<style lang="scss" scoped>
header{
  height: 90px;
  background-color: black;
  h1{
    color: red;
  }
}
</style>
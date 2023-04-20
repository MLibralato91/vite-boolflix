<template>
  <HeaderComponent @on-search="getData" />
<main>
  <section class="container-fluid">
    <h2 class="text-white">Movies</h2>

    <div class="row">
      <ItemCard v-for="(item,index) in store.movieList" :key="item.id" :title="item.title" :orignalTitle="item.original_title" :language="item.original_language" :vote="((item.vote_average) / 2).toFixed(0)" :image="item.poster_path" :overview="item.overview"/>
    </div>
  </section>
  <section class="container-fluid">
    <h2 class="text-white">TV-Series</h2>
    <div class="row">
      <ItemCard v-for="(item,index) in store.seriesList" :key="item.id" :title="item.name" :orignalTitle="item.original_name" :language="item.original_language" :vote="item.vote_average" :image="item.poster_path"/>
    </div>
  </section>
  </main>
</template>

<script>
import axios from 'axios'
import { store } from './data/store';
import HeaderComponent from './components/HeaderComponent.vue';
import ItemCard from './components/ItemCard.vue';
export default {
  components: {
    HeaderComponent,
    ItemCard
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getMovie() {
      const url = store.baseUrl + store.endPoint.movie;
      const options = {
        params: store.parmas,
      }
      axios.get(url, options).then((res) => {
        this.store.movieList = res.data.results;
        console.log(res.data.results);
      });
    },
    getSeries(){
      const url = store.baseUrl + store.endPoint.seriesTv;
      const options = {
        params: store.parmas,
      }
      axios.get(url, options).then((res) => {
        this.store.seriesList = res.data.results;
        console.log(res.data.results);
      });
    },
    getData(){
      this.getMovie(),
      this.getSeries()
    }
  },
  mounted() {
    // this.getMovie();
  }
}
</script>

<style lang="scss" scoped>
main{
  background-color: rgb(53, 46, 46);
}
</style>
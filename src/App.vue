<template>
  <HeaderComponent @on-search="getData" />
  <main>
    <section class="container-fluid">
      <h2 class="text-white">Movies</h2>

      <div class="row">
        <ItemCard v-for="(item, index) in store.movieList" :key="item.id" :title="item.title"
          :orignalTitle="item.original_title" :language="item.original_language"
          :vote="((item.vote_average) / 2).toFixed(0)" :image="item.poster_path" :overview="item.overview" />
        <div class="alert alert-danger" v-if="store.errors.movie">
          <p>{{ store.errors.movie }}</p>
        </div>
        <div class="alert alert-succes" v-if="store.loaders.movie">
          <p>Loading...</p>
        </div>
      </div>
    </section>
    <section class="container-fluid">
      <h2 class="text-white">TV-Series</h2>

      <div class="row">
        <ItemCard v-for="(item, index) in store.seriesList" :key="item.id" :title="item.name"
          :orignalTitle="item.original_name" :language="item.original_language"
          :vote="((item.vote_average) / 2).toFixed(0)" :image="item.poster_path" :overview="item.overview" />
        <div class="alert alert-danger" v-if="store.errors.tv">
          <p>{{ store.errors.tv }}</p>
        </div>
        <div class="alert alert-succes" v-if="store.loaders.tv">
          <p>Loading...</p>
        </div>
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
      }).catch((error) => {
        this.store.errors.movie = error.message
      }).finally(() => {
        this.store.loaders.movie = false;
      });
    },
    getSeries() {
      const url = store.baseUrl + store.endPoint.seriesTv;
      const options = {
        params: store.parmas,
      }
      axios.get(url, options).then((res) => {
        this.store.seriesList = res.data.results;
        console.log(res.data.results);
      }).catch((error) => {
        this.store.errors.tv = error.message
      }).finally(() => {
        this.store.loaders.tv = false;
      });;
    },
    getData() {
      this.store.errors.movie = '';
      this.store.errors.tv = '';
      this.store.loaders.movie = true;
      this.store.loaders.tv = true;
      this.getMovie();
      this.getSeries();
    }
  },
  mounted() {
    // this.getMovie();
  }
}
</script>

<style lang="scss" scoped></style>
<template>
  <div class="col-12 col-sm-6 col-md-4 col-lg-2 mb-5 ">
    <!-- Rotating card -->
    <div class="card-wrapper myCard ">
      <div id="card-1" @click="infoCard = !infoCard" class="card card-rotating ">

        <!-- Front Side -->
        <div class="faceFront" v-if="infoCard">

          <!-- Image-->
          <div class="card-up text-center">
            <img class="" :src="store.imageUrl + store.imgSize + image" alt="">
          </div>


        </div>
        <!-- Front Side -->

        <!-- Back Side -->
        <div class="faceBack p-2 " v-else>
          <div class="card-body ">
            <!-- Content -->
            <h4 class="font-weight-bold mb-0">{{ title }}</h4>
       
            <div class="Stars m-0" :style="'--rating: ' + vote + ';'"></div>
            
          </div>
          <div class="card-text">
            <h6>Valutazione: <i class="fa-solid fa-star" v-for="star in Math.round( vote )" ></i></h6>
            <h6>Trama:</h6>
            <p class=" ">
              {{ overview }}
            </p>

          </div>

        </div>
      </div>
      <!-- Back Side -->

    </div>
  </div>
</template>

<script>
import { store } from '../data/store';
export default {
  name: 'ItemCard',
  props: [
    'title', 'orignalTitle', 'language', 'vote', 'image', 'overview'
  ],
  data() {
    return {
      store,
      infoCard: true
    }
  },
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.faceBack{
  background-color: rgb(150, 150, 135);
}
i{
  color: rgb(225, 225, 73);
  padding-right: 3px;
}


</style>
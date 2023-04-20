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
            <h6 class="font-weight-bold mb-0">{{ vote }}</h6>
            <h5 class="Stars m-0" :style="'--rating: ' + vote + ';'"></h5>
          </div>
          <div class="card-text">
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


:root {
  --star-size: 60px;
  --star-color: #fff;
  --star-background: #fc0;
}

.Stars {
  --percent: calc(var(--rating) / 5 * 100%);

  display: inline-block;
  font-size: var(--star-size);
  font-family: Times;
  line-height: 1;

  &::before {
    content: '★★★★★';
    letter-spacing: 3px;
    background: linear-gradient(90deg, var(--star-background) var(--percent), var(--star-color) var(--percent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

  }

}
</style>
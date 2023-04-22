<template>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-5 ">
    <div id="myCard" @click="infoCard = !infoCard" class="card ">
      
      <div class="faceFront card" v-if="infoCard">
        <div class="">
          <img class="" :src="store.imageUrl + store.imgSize + image" alt="">
        </div>
      </div>
      
      <div class="faceBack p-2 " v-else>
        <div class="">
          <h6 class="fw-bolder">{{ title }}</h6>
          <div class="Stars m-0" :style="'--rating: ' + vote + ';'"></div>
        </div>
        <div class="card-text small">
          <div class="starsVote d-flex">
            <p class="fw-bolder">Voto:</p>
            <div class="starsFull d-flex">
              <i class="fa-solid fa-star" v-for="star in Math.round(vote)"></i>
              <div class="starsEmpty d-flex">
                <i class=" fa-regular fa-star" v-for="star in Math.round(5)"></i>
              </div>
            </div>
          
          </div>
          <p class="fw-bolder">Lingua Originale: <img class="flag"
              :src="`../../public/images/svg/language-${language}.svg`" alt="">{{ language }}</p>

          <p class="fw-bolder">Trama:</p>
          <p class=" ">
            {{ overview }}
          </p>
        </div>
      </div>
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
.card-up img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
#myCard{
  height: 100%;
}
.faceBack {
  font-size: 15px;
  background-color: rgb(150, 150, 135);
  height: 100%;

}

.faceFront {


  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.starsFull {

  position: relative;

  i {
    color: rgb(225, 225, 73);
    font-size: 16px;
  }
}

.starsEmpty {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;

  i {
    color: black;

  }
}

.flag {
  width: 20px;
  border-radius: 30%;
}
</style>
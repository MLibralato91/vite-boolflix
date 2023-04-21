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
            <h6 class="fw-bolder mb-0">{{ title }}</h6>

            <div class="Stars m-0" :style="'--rating: ' + vote + ';'"></div>

          </div>
          <div class="card-text small">
            <div class="starsVote">
              <p class="fw-bolder">Voto:
              <div class="starsFull">
                <i class="fa-solid fa-star" v-for="star in Math.round(vote)"></i>
                <div class="starsEmpty">
                  <i class=" fa-regular fa-star" v-for="star in Math.round(5)"></i>
                </div>
              </div>

              </p>
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
.card-up img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.faceBack {
  font-size: 15px;
  background-color: rgb(150, 150, 135);
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
  left: 0;
  top: 0;

  i {
    color: black;

  }
}

.flag {
  width: 20px;
  border-radius: 30%;
}</style>
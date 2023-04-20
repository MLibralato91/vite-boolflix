<template>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
    <!-- Rotating card -->
    <div class="card-wrapper myCard">
      <div id="card-1" class="card card-rotating text-center">

        <!-- Front Side -->
        <div class="face front">

          <!-- Image-->
          <div class="card-up">
            <img class="img-fluid" :src="store.imageUrl+store.imgSize+image" alt="">
          </div>

          

          <!-- Content -->
          <div class="card-body">
            <h4 class="font-weight-bold mb-3">{{title}}</h4>
            <p class="font-weight-bold blue-text">{{orignalTitle}}</p>
            
          </div>
        </div>
        <!-- Front Side -->

        <!-- Back Side -->
        <div class="face back">
          <div class="card-body">

            <!-- Content -->
            <h4 class="font-weight-bold mb-0">{{title}}</h4>
            <h6 class="font-weight-bold mb-0">{{vote}}</h6>
            <hr>
            <p>
              {{overview}}
              <hr>
              <!-- Social Icons -->
            
            
            </p>
          </div>
        </div>
        <!-- Back Side -->

      </div>
    </div>
  </div>

 
</template>

<script>
import { store } from '../data/store';
export default {
  name: 'ItemCard',
  props: [
    'title', 'orignalTitle', 'language', 'vote', 'image','overview'
  ],
  data() {
    return {
      store
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
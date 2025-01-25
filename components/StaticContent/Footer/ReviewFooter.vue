

<template>
    <div>
        <v-container class="custom_container">
            <v-row class="my-5 ">
                <v-img src="assets/ReviewBg.jpeg">
<template>
    <v-carousel show-arrows="hover" hide-delimiters>
            <v-carousel-item 
              v-for="(item, index) in carouselItems" 
              :key="index"
              class="d-flex align-center justify-center"
              style="border: 2px solid red;"
            >
      <div style="height: 100%;" class=" d-flex align-center justify-center">

     
              <!-- Review Section Below Each Image -->
              <v-row class="mt-3" >
                <v-col class="text-center text-white">
                  <h4>{{ item.reviewTitle }}</h4>
                  <p  >{{ item.reviewContent }}</p>
                  <v-rating :value="item.rating" readonly />
                </v-col>
              </v-row>
            </div>
             </v-carousel-item>
          </v-carousel>
</template>
                </v-img>
            </v-row>
            </v-container>
    </div>
</template>
 
<script>
export default {
  data() {
    return {
      carouselItems: [
        {
          image: "assets/Picture1.png",
          reviewTitle: "Amazing Product!",
          reviewContent: "This is by far the best product I have ever purchased. Highly recommended!",
          rating: 5
        },
        {
          image: "assets/Picture1.png",
          reviewTitle: "Satisfactory Experience",
          reviewContent: "The product is good, though it took longer to arrive.",
          rating: 4
        },
        {
          image: "assets/Picture1.png",
          reviewTitle: "Could Be Better",
          reviewContent: "The product was okay, but the packaging was damaged.",
          rating: 3
        }
      ]
    };
  }
};
</script>
 
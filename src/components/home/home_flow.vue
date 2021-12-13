<template>
     <div>
        <h2>作成の流れ</h2>
    <v-carousel
    cycle
    >
    <v-carousel-item
      v-for="(slide, i) in slide"
      :key="slide"
    >
      <v-sheet
        :color="slide.a"
        height="100%"
        tile
      >
        <v-row
          class="fill-height"
        >
          <div 
          class="text-h2 ma-7"
          >
           <p style="color:white;"
           >Step{{ i + 1 }}</p>
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
  </div>
</template>

<script>
  export default {

    components: {
    },
    data() {
        return {
            slide: [
                {a: 'brown'},
                {a: 'brown'},
                {a: 'brown'},
            ]
        }
    }
  }
</script>
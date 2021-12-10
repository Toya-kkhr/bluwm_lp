<template>
<v-app 
align="center"
>
<home_hero/>
<v-main
style="background:lightblue;"
>
    <v-col
    md='7'
    >
<v-container>
<home_contents/>
</v-container>

<v-container>
   <home_flow/>
</v-container>

<v-container>
<home_function/>
</v-container>

<v-container>
    <home_demo/>
</v-container>

<v-container>
    <home_form/>
</v-container>
</v-col>
</v-main>

 </v-app>
</template>

<script>
import home_hero from '../components/home/home_hero.vue'
import home_contents from '../components/home/home_contents.vue'
import home_flow from '../components/home/home_flow.vue'
import home_function from '../components/home/home_function.vue'
import home_demo from '../components/home/home_demo.vue'
import home_form from '../components/home/home_form.vue'
  export default {

    components: {
        home_hero,
        home_contents,
        home_flow,
        home_function,
        home_demo,
        home_form,
    },
    data: () => ({
      
    }),
  }
</script>
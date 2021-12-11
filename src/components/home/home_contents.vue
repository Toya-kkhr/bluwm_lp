<template>
    <div>
    <p>サービス紹介</p>
<v-row 
xs='1'>
        <v-col
        v-for="contents in contents_img"
            :key="contents"
        cols='12'
        >
            <v-card
            height="500px"
            class="rounded-xl"
            
            >
            <img
            :src="contents.img"
            width="200px"
            height="200px"
            class="rounded-circle ma-3"
            />
            </v-card>
        </v-col>
</v-row>
</div>
</template>

<script>
export default {
    data() {
        return{
            contents_img: [
                {img: require('@/assets/invitation.jpg')},
                {img: require('@/assets/reception.jpg')},
                {img: require('@/assets/entertainment.jpg')},
            ],
            }
        }
}
</script>
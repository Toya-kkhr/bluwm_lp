<template>
    <div>

    <h2>サービス</h2>
    <div>
        <p>
            結婚式で必要なペーパーアイテムをLINEbotでご準備!!<br>
            紙では得れない体験をご提供します。
        </p>
    </div>
<v-row 
xs='1'>
        <v-col
        v-for="contents in contents"
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
            <v-card-subtitle>
            {{contents.title}}  
            </v-card-subtitle>
            </v-card>
        </v-col>
</v-row>
</div>
</template>

<script>
export default {
    data() {
        return{
            contents: [
                {img: require('@/assets/invitation.jpg'),
                title: '招待状'
                },
                {img: require('@/assets/reception.jpg'),
                title: '席次表/メニュー'
                },
                {img: require('@/assets/entertainment.jpg'),
                title: '余興'
                },
            ],
            }
        }
}
</script>
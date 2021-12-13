<template>
<div>
<h2>機能一覧</h2>

<v-row 
justify='center'
>
    <v-col
    v-for="i in item"
    :key="i"
    cols=6
    >
        <v-card
        class="rounded-xl pa-2"
        height="220px"
        
        >
        <div>
        <v-img
        :src= "require('@/assets/sample.png')"
        class="ma-5"
        width="70px"
        />
            <h4>
                {{i.title}}
            </h4>
            </div>
        </v-card>
    </v-col>
</v-row>
</div>
</template>

<script>
export default {
    data() {
        return {
            item: [
                {title: '動画メッセージを送信'},
                {title: '自動Q&A'},
                {title: 'オリジナルラインスタンプの作成'},
                {title: '結婚式前のリマインド'},
                {title: 'ご祝儀オンライン決済'},
                {title: '共有アルバム作成'}
            ]
        }
    }
}
</script>
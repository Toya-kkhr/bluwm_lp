<template>
<div>
    <p>linebotデモ</p>
    <v-row>
        <v-col>
                <v-card
                height="auto"
                class="rounded-xl"
                >
                <v-card-subtitle>QR</v-card-subtitle>
                <v-img src="https://qr-official.line.me/sid/M/336bwogm.png"
                width="50%"
                >
                </v-img>
                    <v-divider></v-divider>
                <v-card-subtitle>URL</v-card-subtitle>
                <v-card-text>
                    <a href="https://lin.ee/tdmSz8a"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" alt="友だち追加" height="36" border="0"></a>
                </v-card-text>
                </v-card>
        </v-col>
    </v-row>
    </div>
</template>

<script>
export default {
    data() {
        }
}
</script>
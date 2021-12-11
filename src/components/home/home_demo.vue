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
                    <a href="https://lin.ee/tdmSz8a" target="_blank" rel="noopener noreferrer">LINE友だち登録</a>
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
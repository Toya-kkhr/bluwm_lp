<template>
<div>
<h2>機能一覧</h2>

<v-row 
justify='center'
>
    <v-col
    v-for="n in 6"
    :key="n"
    cols=6
    >
        <v-card
        class="rounded-xl pa-7"
        height="200px"
        >
            機能詳細
        </v-card>
    </v-col>
</v-row>
</div>
</template>
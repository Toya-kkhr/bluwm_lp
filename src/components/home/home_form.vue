<template>
<div>
    <h2>お問合せ</h2>
    <v-row>
        <v-col>
            <v-card
            class="rounded-xl pa-6"
            >
           <a href="https://lin.ee/eMiWgX2"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" alt="友だち追加" width="40%" border="0"></a>
           <v-card-text>※こちらはお問合せ専用<br>「公式ライン」です。</v-card-text>

                <v-divider class="ma-5"></v-divider>
                <v-form>
                    <v-card-subtitle>メールで相談</v-card-subtitle>
                    <v-text-field
                    label="お名前"
                    >
                    </v-text-field>

                    <v-text-field
                    label="メールアドレス"
                    >
                    </v-text-field>

                    <v-textarea
                    label="お問合せ内容"
                    >
                    </v-textarea>

                    <v-btn
                    width="100%"
                    height="50px"
                    color="primary"
                    >
                        送信
                    </v-btn>
                </v-form>
            </v-card>
        </v-col>
    </v-row>
    </div>
</template>
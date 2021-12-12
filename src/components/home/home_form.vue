<template>
<div>
    <h2>お問合せ</h2>
    <v-row>
        <v-col>
            <v-card
            class="rounded-xl pa-6"
            >
                <v-btn
                color="success"
                height="50px"
                width="50%"
                >
                LINEで相談
                </v-btn>

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
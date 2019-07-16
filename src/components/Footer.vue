<template>
    <v-footer height="auto"
              dark>
        <v-card class="flex"
                flat
                tile>
            <v-card-title class="teal">
                <p class="about-paragraph">Це міні блог який створений на Golang і Vue</p>
                <v-spacer/>

                <router-link class="about-link" :to="{name:'about'}">Про нас</router-link>

            </v-card-title>
            <v-spacer/>
            <v-card-actions class="grey darken-3 justify-center">
                &copy;2019 — <strong>DV</strong><span class="mx-1">|</span>
                Зроблено з любов'ю
                <v-icon class="ml-1"
                        style="font-size: 14px;">
                    fas fa-heart
                </v-icon>
                <v-icon class="mx-2"
                        style="font-size: 14px;">
                    fas fa-arrow-right
                </v-icon>
                <v-icon style="font-size: 14px;">
                    fas fa-code
                </v-icon>
            </v-card-actions>
        </v-card>
    </v-footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>


<style scope>
    .about-paragraph {
        margin: 0;
    }
    .about-link {
        font-size: 15px;
        color: #fff;
        text-decoration: none;
    }
</style>

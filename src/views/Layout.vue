<template>
    <v-app>
        <v-toolbar>
            <v-toolbar-title>
                <router-link style="color:inherit; text-decoration: none"
                             :to="{name:'home'}">
                    GoMicroBlog
                </router-link>
            </v-toolbar-title>
            <v-spacer/>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn
                       flat>
                    Реєстрація
                </v-btn>
                <v-btn :to="{name:'singin'}"
                       flat>
                    Авторизація
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-content>
            <router-view/>
        </v-content>
        <vue-footer/>
    </v-app>
</template>

<script>
    import Footer from '../components/Footer'

    export default {
        name: "Layout",
        components: {
            VueFooter: Footer
        }
    }
</script>

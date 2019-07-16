import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import uk from 'vuetify/lib/locale/uk'
import 'vuetify/src/stylus/app.styl'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify, {
    iconfont: 'fa',
    locales: { uk },
    current: 'uk'
})

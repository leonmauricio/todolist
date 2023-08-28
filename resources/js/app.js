import './bootstrap';
import { createApp } from 'vue';

const app = createApp({});

import App from './components/app.vue';
app.component('app', App);

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
  })

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faPlus, faTrash)

createApp(App)
.use(vuetify)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

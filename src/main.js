import Vue from 'vue'
import VueRouter from 'vue-router';
import router from './router';
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faSearch, faSortAmountUp,
  faSortAmountDown, faPen
  , faTrash, faBell, faUser, faEllipsisV, faBars, faTimes
} from '@fortawesome/free-solid-svg-icons'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

library.add([faSearch, faSortAmountUp,
  faSortAmountDown, faPen
  , faTrash, faBell, faUser, faEllipsisV, faBars, faTimes])

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebaseConfig from './config/firebase'

import firebase from '@firebase/app-compat'
import { getFirestore } from "firebase/firestore"

Vue.config.productionTip = false

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);



new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')


export default db 
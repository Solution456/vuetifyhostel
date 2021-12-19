import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebaseConfig from './config/firebase'

import firebase from '@firebase/app-compat'
import { getFirestore } from "firebase/firestore"

import formatedDate from './fillters/formatedDate'

Vue.config.productionTip = false

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

Vue.filter('formatedDate',formatedDate)


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created(){
    let vm = this
    firebase.auth().onAuthStateChanged((user) => {
      vm.$store.dispatch('STATE_CHANGED', user)
    });
  },
  
  
}).$mount('#app')


export default db 
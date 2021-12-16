import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './user'
import generalModule from './general'
import eventsModule from './events'
import UserDataModule from './userData'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
      userModule,
      generalModule,
      eventsModule,
      UserDataModule,
    }
})

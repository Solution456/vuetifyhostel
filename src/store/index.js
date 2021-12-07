import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './user'
import generalModule from './general'
import userEventsModule from './userEvents'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
      userModule,
      generalModule,
      userEventsModule,

    }
})

import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './user'
import generalModule from './general'

import userEventsModule from './userEvents'

import eventsModule from './events'
<<<<<<< HEAD
import UserDataModule from './userData'
=======

>>>>>>> aafa72e574312411b5a4ef0ad89ca8fedbcc84c7
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
      userModule,
      generalModule,
      userEventsModule,
      eventsModule,
<<<<<<< HEAD
      UserDataModule,
=======

>>>>>>> aafa72e574312411b5a4ef0ad89ca8fedbcc84c7
    }
})

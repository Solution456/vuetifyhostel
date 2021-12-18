import db from '../main.js'
import { doc, setDoc } from "firebase/firestore"
import { v4 as uuidv4 } from 'uuid'
export default{
  state: {
    userEvents: {
      nameEvents: null,
      dateEvents: null,
      fileEvents: null,
      id: null
    }
  },
  mutations: {
      SET_USER_EVENTS(state, payload) {
        state.userEvents.nameEvents = payload,
        state.userEvents.dateEvents = payload,
        //state.userEvents.fileEvents = payload,
        state.userEvents.id = payload
      }
  },

  actions: {
    LOAD_USER_EVENTS({commit,getters}, payload) {
      commit('SET_PROCESSING', true)
      commit('CLEAR_ERROR')
      let event = {
        nameEvents: payload.nameEvents,
        dateEvents: payload.dateEvents,
        //fileEvents: payload.fileEvents,
        id: uuidv4()
      }
      const docRef = doc(db, 'usersEvents',getters.UserUid )
      setDoc(docRef, {
        events: {
          [payload.nameEvents]: event
        }
      }, { merge: true }).then(() =>{
        
        commit('SET_PROCESSING', false)
      
      }).catch(error => {
        commit('SET_PROCESSING', false)
        commit('SET_ERROR', error.message)
      })
    }
  },

  getters: {
      
  },
  
}
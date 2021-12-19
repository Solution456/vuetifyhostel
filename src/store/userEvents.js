import db from '../main.js'
import { doc, setDoc, getDoc} from "firebase/firestore"
import { v4 as uuidv4 } from 'uuid'
import Vue from 'vue'

export default{
  state: {
    listUserEvents: null,
    userEvents: {
      nameEvents: null,
      dateEvents: null,
      fileEvents: null,
      id: null
    }
  },
  mutations: {
      SET_USER_EVENTS(state, payload) {
        Vue.set(state, 'listUserEvents', payload)
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
      
      const docRef = doc(db, 'usersEvents',getters.UserUid)
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
    },

    LOAD_ALL_EVENTS({commit},payload){
      commit('SET_PROCESSING', true)
      commit('CLEAR_ERROR')
      let UsersEvents
      console.log(payload)
      const docRef = doc(db, 'usersEvents', payload)
      console.log(docRef)
      console.log(getDoc(docRef))
      getDoc(docRef).then((querySnapshot) => {
        if(querySnapshot.exists()){

          UsersEvents = querySnapshot.data()
          
        }

        commit('SET_USER_EVENTS', UsersEvents)
        commit('SET_PROCESSING',false)
      }).catch(error => {
          commit('SET_PROCESSING',false)
          console.log(error)
      })
    }
  },

  getters: {
      listEvents: (state) => state.listUserEvents
  },
  
}
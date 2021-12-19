import db from '../main.js'
import { doc, setDoc, getDoc, collection, query, where, getDocs, updateDoc} from "firebase/firestore"
import { v4 as uuidv4 } from 'uuid'
import Vue from 'vue'
import { getDownloadURL, uploadBytes, ref } from 'firebase/storage'
import { storage } from '../main.js'
export default{
  state: {
    taskList:null,
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
      },
      SET_FLOOR_USER_EVENTS(state, payload){
        Vue.set(state, 'taskList',payload)
      },
      ADD_USER_EVENT_STATUS(state, payload){
        Vue.set(state.listUserEvents.events[payload.eventName],'status',payload.status)
      }
  },

  actions: {
    LOAD_USER_EVENTS({commit,getters}, payload) {
      commit('SET_PROCESSING', true)
      commit('CLEAR_ERROR')

      const filename = payload.fileEvents.name
      console.log(filename)
      console.log(typeof (payload.fileEvents))
      const storRef = ref(storage,`eventsStudent/${filename}`)
      console.log(storRef)
      let imgUrl
      uploadBytes(storRef,payload.fileEvents).then(() => {
        getDownloadURL(storRef).then((url) => {
          imgUrl = url
          let event = {
            nameEvents: payload.nameEvents,
            dateEvents: payload.dateEvents,
            fileEvents: imgUrl,
            id: uuidv4(),
            uuid:getters.UserUid
          }
          
          const docRef = doc(db, 'usersEvents', getters.UserUid)
          setDoc(docRef, {
            events: {
              uid:getters.UserUid,
              Floor: payload.Floor,
              [payload.nameEvents]: event
            }
          }, { merge: true }).then(() =>{
            
            commit('SET_PROCESSING', false)
          
          }).catch(error => {
            commit('SET_PROCESSING', false)
            commit('SET_ERROR', error.message)
          })
        })
      }).catch((error) =>{

        commit('SET_PROCESSING', false)
        commit('SET_ERROR', error.message)
      })
    },
    LOAD_FLOOR_USER_EVENTS({commit},payload){
      commit('SET_PROCESSING', true)
      commit('CLEAR_ERROR')
      let FloorTask = []
      
      const q = query(collection(db,'usersEvents') , where('Floor', '==', String(payload)))
      console.log(q)
      
      getDocs(q).then((querySnapshot) => {
        
        querySnapshot.forEach((doc) => {
            console.log(doc.data())
            FloorTask.push(doc.data())
        })

        commit('SET_FLOOR_USER_EVENTS', FloorTask)
        commit('SET_PROCESSING',false)
    }).catch(error => {
        commit('SET_PROCESSING',false)
        console.log(error)
    })


    },
    LOAD_ALL_EVENTS({commit},payload){
      commit('SET_PROCESSING', true)
      commit('CLEAR_ERROR')
      let UsersEvents
      const docRef = doc(db, 'usersEvents', payload)
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
    },

    

    UPDATE_STATUS({commit,dispatch}, payload){
      commit('SET_PROCESSING', true)
      commit('CLEAR_ERROR')
      
      const docRef = doc(db,'usersEvents',payload.uid)

      updateDoc(docRef, {
        [`events.${payload.eventName}.status`]:'Одобренно'
      }).then(() =>{
        commit('ADD_USER_EVENT_STATUS',{eventName: payload.eventName, status:'Одобрено'})
        dispatch('UPDATE_USER_BALLS', {uid:payload.uid, balls:payload.balls})
        commit('SET_PROCESSING',false)
        
      }).catch(error => {
        console.log(error.message)
        commit('SET_PROCESSING',false)
      })
    }
  },

  getters: {
      listEvents: (state) => state.listUserEvents,
      tasksList: (state) => state.taskList
  },
  
}
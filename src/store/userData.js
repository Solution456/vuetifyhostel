
import 'firebase/compat/auth'
import db from '../main.js'
import { doc, getDoc } from "firebase/firestore";
import Vue from 'vue';

export default{
    state: {
        userData: null
        
    },
    mutations: {
      SET_USER_DATA(state, payload){
          Vue.set(state,'userData',payload)
      }  
    },

    actions:{
        LOAD_USER({commit}, payload){
            commit('SET_PROCESSING', true)
            commit('CLEAR_ERROR')

            console.log(payload)

            const docRef = doc(db, 'users', payload)
            console.log(docRef)
            getDoc(docRef).then((data) =>{
                let userData = data.exists ? data.data() : 'ERROR'

                console.log(userData)

                commit('SET_USER_DATA', userData)
                commit('SET_PROCESSING', false)


            }).catch(() =>{
                commit('SET_PROCESSING', false)
            })

            }
    },
    
    getters: {
        UserData: (state) => state.userData
    }
}
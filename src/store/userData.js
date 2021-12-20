import 'firebase/compat/auth'
import db from '../main.js'
import { doc, getDoc, collection, query, where, getDocs} from "firebase/firestore";

import Vue from 'vue';

export default{
    state: {
        userData: null,
        UsersData: null,
        
    },
    mutations: {
      SET_USER_DATA(state, payload){
          Vue.set(state,'userData',payload)
      } ,
      SET_ALL_USERS_DATA(state, payload){
        Vue.set(state, 'UsersData', payload)
      }
    },

    actions:{
        LOAD_USER({commit}, payload){
            commit('SET_PROCESSING', true)
            commit('CLEAR_ERROR')

            const docRef = doc(db, 'users', payload)
        
            getDoc(docRef).then((data) =>{
                let userData = data.exists ? data.data() : 'ERROR'

            

                commit('SET_USER_DATA', userData)
                commit('SET_PROCESSING', false)


            }).catch(() =>{
                commit('SET_PROCESSING', false)
            })

            },

        LOAD_ALL_USERS({commit}, payload){
            commit('SET_PROCESSING', true)
            commit('CLEAR_ERROR')
            let UsersData = []
            const q = query(collection(db,'users'), where('Home', '==', String(payload)))
            
            getDocs(q).then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const data = doc.data()
                    let user = {
                        name: data.Name + ' ' + data.SecondName,
                        phone: data.Phone,
                        email:data.Email,
                        balls:data.balls


                    }
                    /* console.log(data) */
                    UsersData.push(user)
                })

                commit('SET_ALL_USERS_DATA', UsersData)
                commit('SET_PROCESSING',false)
            }).catch(error => {
                commit('SET_PROCESSING',false)
                console.log(error)
            })

            
           
        }
    },
    
    getters: {
        UserData: (state) => state.userData,
        floor: (state) => state.userData.Floor,
        AllUsersData: (state) => state.UsersData
    }
}
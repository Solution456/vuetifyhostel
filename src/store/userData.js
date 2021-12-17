
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
        //   Vue.set(state, 'UsersData', payload)
        state.UsersData = payload
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
            console.log(typeof(payload))
            let UsersData = []
            const q = query(collection(db,'users'), where('Home', '==', String(payload)))
            console.log(getDocs(q))
            getDocs(q).then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const data = doc.data()
                    let user = {
                        name: data.Name + ' ' + data.SecondName,
                        phone: data.Phone,
                        email:data.Phone,
                        balls:data.Floor


                    }
                    console.log(data)
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
        AllUsersData: (state) => state.UsersData
    }
}
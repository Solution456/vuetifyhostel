import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import db from '../main.js'
import { doc, setDoc, updateDoc} from "firebase/firestore";
import Vue from 'vue'

export default{
    
    state: {
        user: {
            isAuthenticated: false,
            uid: null,
            balls: 0
        }
    },
    mutations: {
        SET_USER(state, payload){
            state.user.isAuthenticated = true,
            state.user.uid = payload
        },


        UNSET_USER(state){
            state.user = {
                isAuthenticated: false,
                uid: null
            }
        },

        SET_USER_BALLS(state,payload){
            Vue.set(state.user, 'balls', {balls:payload})
        }
    },
    actions: {
        
        REGISTER({commit}, payload){
            
            commit('SET_PROCESSING', true)
            commit('CLEAR_ERROR')
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then( cred =>{
                return setDoc(doc(db,'users',cred.user.uid),{
                    uid: cred.user.uid,
                    Name: payload.Name,
                    Email:payload.email,
                    SecondName: payload.SecondName,
                    Floor: payload.Floor,
                    Home: payload.Home,
                    Phone: payload.Phone,
                    Permissions:payload.Permissions,
                    balls:0
                })
                    
                
            }).catch((error) =>{
                commit('SET_PROCESSING', false)
                commit('SET_ERROR', error.message)
            })
            
        },

        SIGNIN({commit}, payload){
            commit('SET_PROCESSING', true)
            commit('CLEAR_ERROR')
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
            .then(() => {
            // Signed in 
                
                commit('SET_PROCESSING', false)
            // ...
            })
            .catch((error) => {
                console.log(error)
                commit('SET_PROCESSING', false)
                commit('SET_ERROR', error.message)
                
            // ..
            });

        },

        SIGN_OUT(){
            firebase.auth().signOut()
        },

        STATE_CHANGED({commit, dispatch},payload){
            if(payload){
                commit('SET_USER', payload.uid)
                dispatch('LOAD_USER', payload.uid)
                dispatch('LOAD_ALL_EVENTS',payload.uid)

                dispatch('LOAD_EVENTS')
            }else{
                commit('UNSET_USER')
            }

        },

        UPDATE_USER_BALLS({commit,getters}, payload){
          

            const docRef = doc(db,'users',payload.uid)
            let data = +getters.UserData.balls + +payload.balls
            updateDoc(docRef,{
                balls: data
            }).then(() =>{
                commit('SET_USER_BALLS',payload.data)
                
            }).catch(error =>{
                console.log(error.message)
                commit('SET_PROCESSING',false)
            })

      
        }
        

        
    },
    getters: {
        isUserAuthenticated: (state) => state.user.isAuthenticated,
        UserUid: (state) => state.user.uid
    }
}
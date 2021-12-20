import 'firebase/compat/auth'
import db from '../main.js'
import { storage } from '../main.js';
import { ref, getDownloadURL,uploadBytes } from "firebase/storage";
import {collection,getDocs, setDoc, doc,} from "firebase/firestore";
import Vue from 'vue'

export default{
    
    state: {
        events: null
              
    },

    mutations: {

        SET_ALL_EVENTS(state, payload){
            Vue.set(state, 'events', payload)
        }
        

    },

    actions:{
        LOAD_EVENTS({commit}){
            commit('SET_PROCESSING', true)
            commit('CLEAR_ERROR')
            
            let EventsData = []

            getDocs(collection(db,'events')).then((querySnap)=>{
                querySnap.forEach(doc =>{
                    const data = doc.data()
                    let event = {
                        id:data.id,
                        title:data.title,
                        imgUrl:data.imgUrl,
                        date:data.date,
                        location:data.location,
                        description:data.description
                    }

                    console.log(data)
                    EventsData.push(event)
                })
                commit('SET_ALL_EVENTS', EventsData)
                commit('SET_PROCESSING',false)
            }).catch(error => {
                commit('SET_PROCESSING',false)
                console.log(error)
            })

            
        },
        ADD_EVENT({commit,dispatch}, payload){
            commit('SET_PROCESSING', true)
            commit('CLEAR_ERROR')
            const filename = payload.img.name
            const storRef = ref(storage,`events/${filename}`)
            console.log(storRef)
            let imgUrl
            uploadBytes(storRef,payload.img).then(() => {
                getDownloadURL(storRef).then((url) => {
                    imgUrl = url
                    let event = {
                        title:payload.title,
                        date:payload.date,
                        location:payload.location,
                        description:payload.description,
                        imgUrl: imgUrl
                    }
                    
                    
                    
                    const refDoc = doc(collection(db,'events'))
                    setDoc(refDoc, {
                        ...event,
                        id:refDoc.id
                    }).then( () =>{
                        dispatch('LOAD_EVENTS')
                        commit('SET_PROCESSING',false)
                    })
                    .catch((error) =>{
                        commit('SET_PROCESSING', false)
                        commit('SET_ERROR', error.message)
                    })
                    
                })
            }).catch((error) =>{
                commit('SET_PROCESSING', false)
                commit('SET_ERROR', error.message)
            })
            
           

            
        
            
           
        }
    },

    getters: {
        getEvents: (state) => state.events
    },
}
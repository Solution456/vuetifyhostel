import 'firebase/compat/auth'
import db from '../main.js'
import { storage } from '../main.js';
import { ref, getDownloadURL,uploadBytes } from "firebase/storage";
import {collection,getDocs, setDoc, doc,} from "firebase/firestore";
import Vue from 'vue'

export default{
    
    state: {
        events: null
        // events:
        //     [
        //         {
        //             id:'ggewgewgee2',
        //             title:'Test1 events',
        //             imgUrl:'https://images.unsplash.com/photo-1636923253563-b1642d7ecf40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80',
        //             date: 1637584330978,
        //             location: 'khlhlk',
        //             description: 'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
        //         },

        //         {
        //             id:'ggewgewgee3',
        //             title:'Test2 events',
        //             imgUrl:'https://images.unsplash.com/photo-1636996141852-9532630c5468?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
        //             date: 1637584244458,
        //             location: 'khlhlk',
        //             description: 'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
        //         },

        //         {
        //             id:'ggewgewgee4',
        //             title:'Test3 events',
        //             imgUrl:'https://images.unsplash.com/photo-1636935941606-b883678abb6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        //             date: 1637584254799,
        //             location: 'khlhlk',
        //             description: 'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
        //         },

        //         {
        //             id:'ggewgewgee5',
        //             title:'Test4 events',
        //             imgUrl:'https://images.unsplash.com/photo-1636982915678-bbc71eb35a46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=521&q=80',
        //             date: 1637584330978,
        //             location: 'khlhlk',
        //             description: 'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
        //         },

        //         {
        //             id:'ggewgewgee6',
        //             title:'Test5 events',
        //             imgUrl:'https://images.unsplash.com/photo-1636935941606-b883678abb6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        //             date: 1637584254799,
        //             location: 'khlhlk',
        //             description: 'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
        //         },

        //         {
        //             id:'ggewgewgee7',
        //             title:'Test6 events',
        //             imgUrl:'https://images.unsplash.com/photo-1636982915678-bbc71eb35a46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=521&q=80',
        //             date: 1637584330978,
        //             location: 'khlhlk',
        //             description: 'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
        //         },
        //     ] 
              
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
        ADD_EVENT({commit}, payload){
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
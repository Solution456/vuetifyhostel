export default{
    state: {
        events:
            [
                {
                    id:'ggewgewgee2',
                    title:'Test1 events',
                    imgUrl:'https://images.unsplash.com/photo-1636923253563-b1642d7ecf40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80',
                    date: 1637584330978,
                    location: 'khlhlk',
                    description: 'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
                },

                {
                    id:'ggewgewgee3',
                    title:'Test2 events',
                    imgUrl:'https://images.unsplash.com/photo-1636996141852-9532630c5468?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
                    date: 1637584244458,
                    location: 'khlhlk',
                    description: 'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
                },

                {
                    id:'ggewgewgee4',
                    title:'Test3 events',
                    imgUrl:'https://images.unsplash.com/photo-1636935941606-b883678abb6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
                    date: 1637584254799,
                    location: 'khlhlk',
                    description: 'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
                },

                {
                    id:'ggewgewgee5',
                    title:'Test4 events',
                    imgUrl:'https://images.unsplash.com/photo-1636982915678-bbc71eb35a46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=521&q=80',
                    date: 1637584330978,
                    location: 'khlhlk',
                    description: 'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
                },

                {
                    id:'ggewgewgee6',
                    title:'Test5 events',
                    imgUrl:'https://images.unsplash.com/photo-1636935941606-b883678abb6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
                    date: 1637584254799,
                    location: 'khlhlk',
                    description: 'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
                },

                {
                    id:'ggewgewgee7',
                    title:'Test6 events',
                    imgUrl:'https://images.unsplash.com/photo-1636982915678-bbc71eb35a46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=521&q=80',
                    date: 1637584330978,
                    location: 'khlhlk',
                    description: 'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
                },
            ] 
              
    },

    mutations: {
        SET_EVENTS(state, payload){
            state.events = payload;
        }
    },

    actions:{

    },

    getters: {
        getEvents: (state) => state.events
    },
}
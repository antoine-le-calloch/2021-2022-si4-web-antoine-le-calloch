// import axios from "axios";
import { messagesMock } from '@/mocks/messages.mock';


export const messagesModule = {
    namespace: false,
    state(){
        return {
            messages: [],
        }
    },
    mutations: {
        setMessages: (state, payload) => {
            if(!state.messages.length)
                state.messages = payload
        },
        delMessages: (state, id) => {
            state.messages = state.messages.filter(function(message) {
                return message.id !== id
            })
        }
    },
    getters: {
        numberOfUnreadMessages: (state) =>{
            let nbUnreadMessage = 0;
            state.messages.forEach(message =>{if(!message.read){nbUnreadMessage++}});
            return nbUnreadMessage;
        },
        messagesSortedByDate: (state) =>{
            function compareDates(a, b) {
                return new Date(a.date) - new Date(b.date);
            }
            state.messages.sort(compareDates);
            return state.messages;
        },
        getMessageWithId: (state) => (messageId) =>{
            let messageById;
            state.messages.forEach(message => {
                if((message.id === messageId)) {
                    messageById = message;
                }
            })
            return messageById;
        }
    },
    actions: {
        async setMessages(context){
            try{
                //const response = await axios.get("https://io-labs.fr/messenger/messages.json"); // Import from web
                // context.commit('setMessages', response.data); // Import from local mock file

                context.commit('setMessages', messagesMock); // Import from local mock file
            }
            catch (error){
                console.log('error get messages : ', error);
            }
        }
    }
}

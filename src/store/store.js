import {createStore} from "vuex";
import {messagesMock} from "@/mocks/messages.mock";

export default createStore({
    state(){
        return {
            messages: messagesMock,
        }
    },
    mutations: {
        setMessages: (state, payload) => state.messages = payload
    },
    getters: {
        numberOfUnreadMessages: (state) =>{
            let nbUnreadMessage = 0;
            state.messages.forEach(message =>{if(!message.read){nbUnreadMessage++}});
            return nbUnreadMessage;
        },
        messagesSortedByDate: (state) =>{
            state.messages.sort(message => message.date);
            return null;
        }
    }
})

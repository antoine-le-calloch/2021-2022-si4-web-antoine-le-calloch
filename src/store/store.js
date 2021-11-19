import {createStore} from "vuex";
import {messagesMock} from "@/mocks/messages.mock";

export default createStore({
    state(){
        return {
            messages: messagesMock,
        }
    },
    mutations: {
        setMessages: (state, payload) => {state.messages = payload},
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
        }
    }
})

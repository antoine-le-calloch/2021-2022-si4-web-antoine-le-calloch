import axios from "axios";

export const messagesModule = {
    namespace: false,
    state(){
        return {
            messages: [],
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
    },
    actions: {
        async setMessages(context){
            try{
                const response = await axios.get("https://io-labs.fr/messenger/messages.json");
                context.commit('setMessages', response.data);
            }
            catch (error){
                console.log('error: ', error);
            }
        }
    }
}

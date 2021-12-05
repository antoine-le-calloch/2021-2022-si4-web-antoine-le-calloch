import axios from "axios";

export const conversationsModule = {
    namespace: false,
    state(){
        return {
            conversations: new Map(),
        }
    },
    mutations: {
        setConversations: (state, payload) => {
            if (!state.conversations.size) {
                state.conversations = payload;
            }
        },
        addSmsToOneConversation: (state, payload) => {
            state.conversations.get(payload.id).push({
                id: 0,
                content: payload.txt,
                read: false,
                date: new Date()
            });
        }
    },
    getters: {
        OneSortedConversation: (state) => (messageId) => {
            function compareDates(a, b) {
                return new Date(a.date) - new Date(b.date);
            }
            state.conversations.get(messageId).sort(compareDates);
            return state.conversations.get(messageId);
        }
    },
    actions: {
        async setConversations(context){
            try{
                const response = await axios.get("https://raw.githubusercontent.com/NablaT/test-api/master/assets/conversation");
                const messages = context.getters.messagesSortedByDate;
                const conversations = new Map();
                for (let i = 0; i < messages.length; i++) {
                    conversations.set(messages[i].id, Array.from(response.data.messages));
                }
                context.commit('setConversations', conversations);
            }
            catch (error){
                console.log('error: ', error);
            }
        }
    }
}

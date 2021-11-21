import axios from "axios";

export const contactsModule = {
    namespace: false,
    state(){
        return {
            contacts: [],
        }
    },
    mutations: {
        setContacts: (state, payload) => {state.contacts = payload},
    },
    getters: {
        contactsSortedByName: (state) =>{
            return state.contacts;
        }
    },
    actions: {
        async setContacts(context){
            try{
                const response = await axios.get("https://io-labs.fr/messenger/contacts.json");
                context.commit('setContacts', response.data);
            }
            catch (error){
                console.log('error: ', error);
            }
        }
    }
}

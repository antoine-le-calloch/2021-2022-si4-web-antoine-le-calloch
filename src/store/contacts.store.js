//import axios from "axios";
import { contactsMock } from '@/mocks/contacts.mock';

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
                //const response = await axios.get("https://io-labs.fr/messenger/contacts.json"); // Import from web
                //context.commit('setContacts', response.data);

                context.commit('setContacts', contactsMock); // Import from local mock file
            }
            catch (error){
                console.log('error get contacts : ', error);
            }
        }
    }
}

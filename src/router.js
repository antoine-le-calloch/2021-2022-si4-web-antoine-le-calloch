import { createWebHistory, createRouter } from 'vue-router'
import Messages from './components/Messages.vue'
import Contacts from './components/Contacts.vue'
import Conversation from './components/Conversation.vue'
import PrincipalPage from "@/components/PrincipalPage";

const routes = [
    { path: '/', redirect: '/principalPage/messages' },
    { path: '/principalPage', component: PrincipalPage,
        children: [
            {
                path: 'messages',
                component: Messages
            },
            {
                path: 'contacts',
                component: Contacts
            }
        ]
    },
    { path: '/conversation', component: Conversation}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;

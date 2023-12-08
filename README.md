SI4 WEB project : Message application

Project setup

	npm install

Compiles and hot-reloads for development

	npm run serve

Compiles and minifies for production

	npm run build

![Presentation_send_messages](https://github.com/antoine-le-calloch/2021-2022-si4-web-antoine-le-calloch/assets/71392407/a6e31b97-39bd-4b2b-b1ce-25f61b2c3d06)
![Presentation_messages](https://github.com/antoine-le-calloch/2021-2022-si4-web-antoine-le-calloch/assets/71392407/a02fb906-ecda-478c-ac3f-ef499d9c65ea)
![Presentation_conversations](https://github.com/antoine-le-calloch/2021-2022-si4-web-antoine-le-calloch/assets/71392407/297d7655-a67d-4233-b27e-5d34c08d3888)
![Présentation_conversation_actions](https://github.com/antoine-le-calloch/2021-2022-si4-web-antoine-le-calloch/assets/71392407/104fba52-eb57-4f0f-840c-fe1baaf0f2d4)
![Presentation_contacts](https://github.com/antoine-le-calloch/2021-2022-si4-web-antoine-le-calloch/assets/71392407/8a965160-2aa2-418e-bcc5-6a4697c98b38)

Functionality :
- Display all conversations with the latest on the top and the not read in bold.
- <img src="https://github.com/antoine-le-calloch/2021-2022-si4-web-antoine-le-calloch/assets/71392407/a6e31b97-39bd-4b2b-b1ce-25f61b2c3d06" data-canonical-src="https://github.com/antoine-le-calloch/2021-2022-si4-web-antoine-le-calloch/assets/71392407/a6e31b97-39bd-4b2b-b1ce-25f61b2c3d06" width="200" height="400" />

- Display all contacts.
![Presentation_contacts](https://github.com/antoine-le-calloch/2021-2022-si4-web-antoine-le-calloch/assets/71392407/c47cf485-257b-4b37-96a2-57b23081bd37)

- After clicking on a conversation, you can see all the messages sent or received. Arrow at the top left of conversations to return to the list of messages
![Presentation_messages](https://github.com/antoine-le-calloch/2021-2022-si4-web-antoine-le-calloch/assets/71392407/c47cf485-257b-4b37-96a2-57b23081bd37)

- Possibility to send written messages or thumbs up.
![Presentation_send_messages](https://github.com/antoine-le-calloch/2021-2022-si4-web-antoine-le-calloch/assets/71392407/6d96ce2c-b2d8-4643-b215-1887fb81d76a)

- On the conversation screen, slide a conversation to the left to reveal the possible actions on it (read/unread/delete)
![Présentation_conversation_actions](https://github.com/antoine-le-calloch/2021-2022-si4-web-antoine-le-calloch/assets/71392407/be51de67-6bba-4555-b2a2-97e0f3fc3c91)
	
- If too many messages, conversations or contacts, option to scroll down to see the rest. (invisible scrollbar to be more aesthetic)

- saving new messages and thumbs up even after a return to the list of messages but only for the associated recipient. We load a conversation base similar for each contact but the rest is personal to each).
  

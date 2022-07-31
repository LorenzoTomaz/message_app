<template>
  <chat-window v-if="address" :current-user-id="currentUserId" :rooms="rooms" :messages="messages" @send-message="sendMessage" />
</template>

<script>
import ChatWindow from "vue-advanced-chat";

import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "Chat",
  components: {
    ChatWindow,
  },
  watch: {
    // whenever question changes, this function will run
    address(newAddress, oldAddress) {
      if (newAddress != oldAddress) {
        if (this.client && typeof this.client.close == "function") {
          this.client.close();
        }
        this.client = null;
        this.createWSClient();
      }
    },
  },
  methods: {
    receiverMessageBody(content) {
      return {
        _id: 10000,
        indexId: 20000,
        content,
        senderId: 4321,
        username: "John Doe",
        avatar:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MEAm4ObsVs9b4RP5fkDdvwHaEK%26pid%3DApi&f=1",
        date: "13 November",
        timestamp: "10:20",
        system: false,
        saved: true,
        distributed: true,
        seen: true,
        deleted: false,
        failure: false,
        disableActions: false,
        disableReactions: false,
      };
    },
    senderMessageBody(content) {
      return {
        _id: 10000,
        indexId: 20000,
        content,
        senderId: 1234,
        username: "John Doe",
        avatar:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnft-digital-art.com%2Fwp-content%2Fuploads%2F2021%2F04%2Fnft-digital-art.com-what-are-nfts-scaled-e1618106347325-2048x1152.jpeg&f=1&nofb=1",
        date: "13 November",
        timestamp: "10:20",
        system: false,
        saved: true,
        distributed: true,
        seen: true,
        deleted: false,
        failure: false,
        disableActions: false,
        disableReactions: false,
      };
    },
    async createWSClient() {
      this.client = new WebSocket("ws://localhost:26657/websocket");
      this.client.onopen = async (e) => {
        console.log("connect");
        await this.subscribeNewMessages();
      };
      this.client.onmessage = (event) => {
        if (event) {
          console.log(event);
          const parseEvent = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
          if (event.data) {
            const content = parseEvent.result?.events["message.Body"];
            console.log(parseEvent);
            console.log(parseEvent.result?.events);
            if (content) {
              this.messages.push(this.receiverMessageBody(content[0]));
            }
          }
        }
      };
      this.client.onclose = (e) => {
        console.log("disconnect");
      };

      this.client.onerror = (e) => {
        console.log("error");
      };
    },
    async subscribeNewMessages() {
      this.client.send(
        JSON.stringify({
          jsonrpc: "2.0",
          method: "subscribe",
          id: 1,
          params: { query: `message.action='send_message' AND message.Receiver='${this.address}'` },
        })
      );
    },
    async sendMessage(event) {
      console.log(event);
      console.log("clicked");
      console.log(this.address);
      const bob = "cosmos1pjsqxp2ust47s0kfsskxfdfpzz72j022nqqntm";
      const requestData = {
        chatId: "1",
        sender: this.address,
        receiver: bob,
        body: event.content,
        creator: this.address,
      };
      const res = await this.$store.dispatch("LorenzoTomaz.messageapp.messageapp/sendMsgSendMessage", {
        value: requestData,
        fee: [],
      });
      this.messages.push(this.senderMessageBody(event.content));
      console.log(res);
      console.log(this.address);
    },
  },
  data() {
    return {
      client: null,
      roomsPerPage: 15,
      roomId: "",
      startRooms: null,
      endRooms: null,
      roomsLoaded: false,
      loadingRooms: true,
      allUsers: [],
      loadingLastMessageByRoom: 0,
      roomsLoadedCount: false,
      selectedRoom: null,
      messagesPerPage: 20,
      messagesLoaded: false,
      roomMessage: "",
      lastLoadedMessage: null,
      previousLastLoadedMessage: null,
      roomsListeners: [],
      listeners: [],
      typingMessageCache: "",
      disableForm: false,
      addNewRoom: null,
      addRoomUsername: "",
      inviteRoomId: null,
      invitedUsername: "",
      removeRoomId: null,
      removeUserId: "",
      removeUsers: [],
      roomActions: [
        { name: "inviteUser", title: "Invite User" },
        { name: "removeUser", title: "Remove User" },
        { name: "deleteRoom", title: "Delete Room" },
      ],
      menuActions: [
        { name: "inviteUser", title: "Invite User" },
        { name: "removeUser", title: "Remove User" },
        { name: "deleteRoom", title: "Delete Room" },
      ],
      messageSelectionActions: [{ name: "deleteMessages", title: "Delete" }],
      styles: { container: { borderRadius: "4px" } },
      templatesText: [
        {
          tag: "help",
          text: "This is the help",
        },
        {
          tag: "action",
          text: "This is the action",
        },
        {
          tag: "action 2",
          text: "This is the second action",
        },
      ],
      // ,dbRequestCount: 0
      rooms: [
        {
          roomId: 1,
          roomName: "Room 1",
          avatar:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MEAm4ObsVs9b4RP5fkDdvwHaEK%26pid%3DApi&f=1",
          unreadCount: 0,
          index: 3,
          lastMessage: {
            content: "Hey",
            senderId: 1234,
            username: "John Doe",
            timestamp: "10:20",
            saved: true,
            distributed: false,
            seen: false,
            new: true,
          },
          users: [
            {
              _id: 1234,
              username: "John Doe",
              avatar:
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnft-digital-art.com%2Fwp-content%2Fuploads%2F2021%2F04%2Fnft-digital-art.com-what-are-nfts-scaled-e1618106347325-2048x1152.jpeg&f=1&nofb=1",
              status: {
                state: "online",
                lastChanged: "today, 14:30",
              },
            },
            {
              _id: 4321,
              username: "John Snow",
              avatar:
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MEAm4ObsVs9b4RP5fkDdvwHaEK%26pid%3DApi&f=1",
              status: {
                state: "offline",
                lastChanged: new Date().toDateString(),
              },
            },
          ],
          typingUsers: [4321],
        },
      ],
      messages: [
        {
          _id: 7890,
          indexId: 12092,
          content: "Hey",
          senderId: 4321,
          username: "John Doe",
          avatar:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MEAm4ObsVs9b4RP5fkDdvwHaEK%26pid%3DApi&f=1",
          date: "13 November",
          timestamp: `${new Date().getHours()}:${new Date().getMinutes()}`,
          system: false,
          saved: true,
          distributed: true,
          seen: true,
          deleted: false,
          failure: false,
          disableActions: false,
          disableReactions: false,
        },
      ],
      currentUserId: 1234,
    };
  },
  setup() {
    // store
    let $s = useStore();

    // computed
    let address = computed(() => $s.getters["common/wallet/address"]);

    return {
      address,
    };
  },
  mounted() {
    this.createWSClient();
  },
};
</script>

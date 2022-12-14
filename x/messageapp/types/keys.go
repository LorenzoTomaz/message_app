package types

const (
	// ModuleName defines the module name
	ModuleName = "messageapp"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_messageapp"
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	ChatCounterKey = "ChatCounter-value-"
)

const (
    ChatEventKey     = "NewChatCreated"
    ChatEventSender = "Sender"
    ChatEventReceiver   = "Receiver"
    ChatEventIndex     = "ChatId"
	MessageEventKey     = "NewMessageCreated"
    MessageEventSender = "Sender"
    MessageEventReceiver   = "Receiver"
    MessageEventIndex     = "ChatId"
	MessageEventBody     = "Body"
)
package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		ChatList: []Chat{},
		ChatCounter: &ChatCounter{
			IdValue: uint64(DefaultIndex),
		},
		MessagesList: []Messages{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in chat
	chatIndexMap := make(map[string]struct{})

	for _, elem := range gs.ChatList {
		index := string(ChatKey(elem.Index))
		if _, ok := chatIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for chat")
		}
		chatIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in messages
	messagesIndexMap := make(map[string]struct{})

	for _, elem := range gs.MessagesList {
		index := string(MessagesKey(elem.Index))
		if _, ok := messagesIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for messages")
		}
		messagesIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}

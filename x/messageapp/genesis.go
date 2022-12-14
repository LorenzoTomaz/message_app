package messageapp

import (
	"github.com/LorenzoTomaz/message_app/x/messageapp/keeper"
	"github.com/LorenzoTomaz/message_app/x/messageapp/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the chat
	for _, elem := range genState.ChatList {
		k.SetChat(ctx, elem)
	}
	// Set if defined
	if genState.ChatCounter != nil {
		k.SetChatCounter(ctx, *genState.ChatCounter)
	}
	// Set all the messages
	for _, elem := range genState.MessagesList {
		k.SetMessages(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.ChatList = k.GetAllChat(ctx)
	// Get all chatCounter
	chatCounter, found := k.GetChatCounter(ctx)
	if found {
		genesis.ChatCounter = &chatCounter
	}
	genesis.MessagesList = k.GetAllMessages(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}

package messageapp_test

import (
	"testing"

	keepertest "github.com/LorenzoTomaz/message_app/testutil/keeper"
	"github.com/LorenzoTomaz/message_app/testutil/nullify"
	"github.com/LorenzoTomaz/message_app/x/messageapp"
	"github.com/LorenzoTomaz/message_app/x/messageapp/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		ChatList: []types.Chat{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		ChatCounter: &types.ChatCounter{
			IdValue: 20,
		},
		MessagesList: []types.Messages{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.MessageappKeeper(t)
	messageapp.InitGenesis(ctx, *k, genesisState)
	got := messageapp.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.ChatList, got.ChatList)
	require.Equal(t, genesisState.ChatCounter, got.ChatCounter)
	require.ElementsMatch(t, genesisState.MessagesList, got.MessagesList)
	// this line is used by starport scaffolding # genesis/test/assert
}

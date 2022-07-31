package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"

	keepertest "github.com/LorenzoTomaz/message_app/testutil/keeper"
	"github.com/LorenzoTomaz/message_app/testutil/nullify"
	"github.com/LorenzoTomaz/message_app/x/messageapp/keeper"
	"github.com/LorenzoTomaz/message_app/x/messageapp/types"
)

func createTestChatCounter(keeper *keeper.Keeper, ctx sdk.Context) types.ChatCounter {
	item := types.ChatCounter{}
	keeper.SetChatCounter(ctx, item)
	return item
}

func TestChatCounterGet(t *testing.T) {
	keeper, ctx := keepertest.MessageappKeeper(t)
	item := createTestChatCounter(keeper, ctx)
	rst, found := keeper.GetChatCounter(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestChatCounterRemove(t *testing.T) {
	keeper, ctx := keepertest.MessageappKeeper(t)
	createTestChatCounter(keeper, ctx)
	keeper.RemoveChatCounter(ctx)
	_, found := keeper.GetChatCounter(ctx)
	require.False(t, found)
}

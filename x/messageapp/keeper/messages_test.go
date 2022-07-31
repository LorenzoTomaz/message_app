package keeper_test

import (
	"strconv"
	"testing"

	keepertest "github.com/LorenzoTomaz/message_app/testutil/keeper"
	"github.com/LorenzoTomaz/message_app/testutil/nullify"
	"github.com/LorenzoTomaz/message_app/x/messageapp/keeper"
	"github.com/LorenzoTomaz/message_app/x/messageapp/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNMessages(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Messages {
	items := make([]types.Messages, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetMessages(ctx, items[i])
	}
	return items
}

func TestMessagesGet(t *testing.T) {
	keeper, ctx := keepertest.MessageappKeeper(t)
	items := createNMessages(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetMessages(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestMessagesRemove(t *testing.T) {
	keeper, ctx := keepertest.MessageappKeeper(t)
	items := createNMessages(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveMessages(ctx,
			item.Index,
		)
		_, found := keeper.GetMessages(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestMessagesGetAll(t *testing.T) {
	keeper, ctx := keepertest.MessageappKeeper(t)
	items := createNMessages(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllMessages(ctx)),
	)
}

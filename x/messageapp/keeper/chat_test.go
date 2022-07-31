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

func createNChat(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Chat {
	items := make([]types.Chat, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetChat(ctx, items[i])
	}
	return items
}

func TestChatGet(t *testing.T) {
	keeper, ctx := keepertest.MessageappKeeper(t)
	items := createNChat(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetChat(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestChatRemove(t *testing.T) {
	keeper, ctx := keepertest.MessageappKeeper(t)
	items := createNChat(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveChat(ctx,
			item.Index,
		)
		_, found := keeper.GetChat(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestChatGetAll(t *testing.T) {
	keeper, ctx := keepertest.MessageappKeeper(t)
	items := createNChat(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllChat(ctx)),
	)
}

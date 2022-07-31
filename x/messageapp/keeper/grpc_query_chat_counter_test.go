package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/LorenzoTomaz/message_app/testutil/keeper"
	"github.com/LorenzoTomaz/message_app/testutil/nullify"
	"github.com/LorenzoTomaz/message_app/x/messageapp/types"
)

func TestChatCounterQuery(t *testing.T) {
	keeper, ctx := keepertest.MessageappKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	item := createTestChatCounter(keeper, ctx)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetChatCounterRequest
		response *types.QueryGetChatCounterResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetChatCounterRequest{},
			response: &types.QueryGetChatCounterResponse{ChatCounter: item},
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.ChatCounter(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}

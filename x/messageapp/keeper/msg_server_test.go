package keeper_test

import (
	"context"
	"testing"

	keepertest "github.com/LorenzoTomaz/message_app/testutil/keeper"
	"github.com/LorenzoTomaz/message_app/x/messageapp/keeper"
	"github.com/LorenzoTomaz/message_app/x/messageapp/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.MessageappKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}

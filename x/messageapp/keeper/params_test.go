package keeper_test

import (
	"testing"

	testkeeper "github.com/LorenzoTomaz/message_app/testutil/keeper"
	"github.com/LorenzoTomaz/message_app/x/messageapp/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.MessageappKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}

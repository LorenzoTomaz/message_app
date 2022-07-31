package keeper

import (
	"context"

	"github.com/LorenzoTomaz/message_app/x/messageapp/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) SendMessage(goCtx context.Context, msg *types.MsgSendMessage) (*types.MsgSendMessageResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgSendMessageResponse{}, nil
}

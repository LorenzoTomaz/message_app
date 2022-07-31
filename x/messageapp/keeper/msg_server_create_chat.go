package keeper

import (
	"context"
	"strconv"

	"github.com/LorenzoTomaz/message_app/x/messageapp/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateChat(goCtx context.Context, msg *types.MsgCreateChat) (*types.MsgCreateChatResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	chatCounter, found := k.Keeper.GetChatCounter(ctx)
	if !found {
		panic("Chat Counter not found")
	}
	newCounter := strconv.FormatUint(chatCounter.IdValue, 10)
	chat := types.Chat{
		Index: newCounter,
		User: msg.Sender,
		Receiver: msg.Receiver,
		MessageCount: uint64(0),
	}
	err := chat.Validate()
	if err != nil {
		return nil, err
	}
	k.Keeper.SetChat(ctx, chat)

	chatCounter.IdValue++
	k.Keeper.SetChatCounter(ctx, chatCounter)
	ctx.EventManager().EmitEvent(
		sdk.NewEvent(sdk.EventTypeMessage,
			sdk.NewAttribute(sdk.AttributeKeyModule, types.ModuleName),
			sdk.NewAttribute(sdk.AttributeKeyAction, types.ChatEventKey),
			sdk.NewAttribute(types.ChatEventIndex, newCounter),
			sdk.NewAttribute(types.ChatEventSender, msg.Sender),
			sdk.NewAttribute(types.ChatEventReceiver, msg.Receiver),
		),
	)
	return &types.MsgCreateChatResponse{
		IdValue: newCounter,
	}, nil
}

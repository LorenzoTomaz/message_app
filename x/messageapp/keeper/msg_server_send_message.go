package keeper

import (
	"context"
	"strconv"

	"github.com/LorenzoTomaz/message_app/x/messageapp/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) SendMessage(goCtx context.Context, msg *types.MsgSendMessage) (*types.MsgSendMessageResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	chat, found := k.Keeper.GetChat(ctx, msg.ChatId)
	if !found {
		panic("Chat not found")
	}
	messageCount := strconv.FormatUint(chat.MessageCount, 10) 
	chatId, chatErr := strconv.ParseInt(msg.ChatId, 10, 64)
	if chatErr != nil {
		panic("Invalid ChatId")
	}
	message := types.Messages{
		Index: messageCount,
		Sender: msg.Sender,
		Receiver: msg.Receiver,
		Body: msg.Body,
		ChatId: uint64(chatId),
	}
	err := message.Validate()
	if err != nil {
		return nil, err
	}

	k.Keeper.SetMessages(ctx, message)
	chat.MessageCount++
	k.Keeper.SetChat(ctx, chat)
	

	return &types.MsgSendMessageResponse{
		ChatId: chat.Index,
		MessageId: messageCount,
	}, nil
}

package keeper

import (
	"context"

	"github.com/LorenzoTomaz/message_app/x/messageapp/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ChatAll(c context.Context, req *types.QueryAllChatRequest) (*types.QueryAllChatResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var chats []types.Chat
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	chatStore := prefix.NewStore(store, types.KeyPrefix(types.ChatKeyPrefix))

	pageRes, err := query.Paginate(chatStore, req.Pagination, func(key []byte, value []byte) error {
		var chat types.Chat
		if err := k.cdc.Unmarshal(value, &chat); err != nil {
			return err
		}

		chats = append(chats, chat)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllChatResponse{Chat: chats, Pagination: pageRes}, nil
}

func (k Keeper) Chat(c context.Context, req *types.QueryGetChatRequest) (*types.QueryGetChatResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetChat(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetChatResponse{Chat: val}, nil
}

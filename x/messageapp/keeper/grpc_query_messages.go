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

func (k Keeper) MessagesAll(c context.Context, req *types.QueryAllMessagesRequest) (*types.QueryAllMessagesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var messagess []types.Messages
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	messagesStore := prefix.NewStore(store, types.KeyPrefix(types.MessagesKeyPrefix))

	pageRes, err := query.Paginate(messagesStore, req.Pagination, func(key []byte, value []byte) error {
		var messages types.Messages
		if err := k.cdc.Unmarshal(value, &messages); err != nil {
			return err
		}

		messagess = append(messagess, messages)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllMessagesResponse{Messages: messagess, Pagination: pageRes}, nil
}

func (k Keeper) Messages(c context.Context, req *types.QueryGetMessagesRequest) (*types.QueryGetMessagesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetMessages(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetMessagesResponse{Messages: val}, nil
}

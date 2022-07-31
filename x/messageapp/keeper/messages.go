package keeper

import (
	"github.com/LorenzoTomaz/message_app/x/messageapp/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetMessages set a specific messages in the store from its index
func (k Keeper) SetMessages(ctx sdk.Context, messages types.Messages) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MessagesKeyPrefix))
	b := k.cdc.MustMarshal(&messages)
	store.Set(types.MessagesKey(
		messages.Index,
	), b)
}

// GetMessages returns a messages from its index
func (k Keeper) GetMessages(
	ctx sdk.Context,
	index string,

) (val types.Messages, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MessagesKeyPrefix))

	b := store.Get(types.MessagesKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveMessages removes a messages from the store
func (k Keeper) RemoveMessages(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MessagesKeyPrefix))
	store.Delete(types.MessagesKey(
		index,
	))
}

// GetAllMessages returns all messages
func (k Keeper) GetAllMessages(ctx sdk.Context) (list []types.Messages) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MessagesKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Messages
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

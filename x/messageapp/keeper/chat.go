package keeper

import (
	"github.com/LorenzoTomaz/message_app/x/messageapp/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetChat set a specific chat in the store from its index
func (k Keeper) SetChat(ctx sdk.Context, chat types.Chat) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ChatKeyPrefix))
	b := k.cdc.MustMarshal(&chat)
	store.Set(types.ChatKey(
		chat.Index,
	), b)
}

// GetChat returns a chat from its index
func (k Keeper) GetChat(
	ctx sdk.Context,
	index string,

) (val types.Chat, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ChatKeyPrefix))

	b := store.Get(types.ChatKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveChat removes a chat from the store
func (k Keeper) RemoveChat(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ChatKeyPrefix))
	store.Delete(types.ChatKey(
		index,
	))
}

// GetAllChat returns all chat
func (k Keeper) GetAllChat(ctx sdk.Context) (list []types.Chat) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ChatKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Chat
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

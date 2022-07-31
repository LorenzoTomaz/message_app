package keeper

import (
	"github.com/LorenzoTomaz/message_app/x/messageapp/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetChatCounter set chatCounter in the store
func (k Keeper) SetChatCounter(ctx sdk.Context, chatCounter types.ChatCounter) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ChatCounterKey))
	b := k.cdc.MustMarshal(&chatCounter)
	store.Set([]byte{0}, b)
}

// GetChatCounter returns chatCounter
func (k Keeper) GetChatCounter(ctx sdk.Context) (val types.ChatCounter, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ChatCounterKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveChatCounter removes chatCounter from the store
func (k Keeper) RemoveChatCounter(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ChatCounterKey))
	store.Delete([]byte{0})
}

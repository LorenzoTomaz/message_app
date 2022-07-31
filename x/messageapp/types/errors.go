package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/messageapp module sentinel errors
var (
	ErrInvalidUser = sdkerrors.Register(ModuleName, 1100, "Invalid user: %s")
	ErrInvalidReceiver = sdkerrors.Register(ModuleName, 1101, "Invalid receiver: %s")
	ErrInvalidSender = sdkerrors.Register(ModuleName, 1102, "Invalid sender: %s")
)

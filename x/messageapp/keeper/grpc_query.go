package keeper

import (
	"github.com/LorenzoTomaz/message_app/x/messageapp/types"
)

var _ types.QueryServer = Keeper{}

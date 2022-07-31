package types

import (
	"testing"

	"github.com/LorenzoTomaz/message_app/testutil/sample"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
)

func TestMsgSendMessage_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgSendMessage
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgSendMessage{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgSendMessage{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}

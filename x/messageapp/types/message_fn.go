package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)


func (msg *Messages) GetSenderAddress() (creator sdk.AccAddress, err error) {
	creator, errCreator := sdk.AccAddressFromBech32(msg.Sender)
	return creator, sdkerrors.Wrapf(errCreator, ErrInvalidSender.Error(), msg.Sender)
}

func (msg *Messages) GetReceiverAddress() (creator sdk.AccAddress, err error) {
	creator, errCreator := sdk.AccAddressFromBech32(msg.Receiver)
	return creator, sdkerrors.Wrapf(errCreator, ErrInvalidUser.Error(), msg.Receiver)
}


func (msg Messages) Validate() (err error) {
	_, err = msg.GetSenderAddress()
	if err != nil {
		return err
	}
	_, err = msg.GetReceiverAddress()
	return err
}
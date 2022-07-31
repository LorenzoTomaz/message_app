package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)


func (chat *Chat) GetUserAddress() (creator sdk.AccAddress, err error) {
	creator, errCreator := sdk.AccAddressFromBech32(chat.User)
	return creator, sdkerrors.Wrapf(errCreator, ErrInvalidUser.Error(), chat.User)
}

func (chat *Chat) GetReceiverAddress() (creator sdk.AccAddress, err error) {
	creator, errCreator := sdk.AccAddressFromBech32(chat.Receiver)
	return creator, sdkerrors.Wrapf(errCreator, ErrInvalidUser.Error(), chat.Receiver)
}


func (chat Chat) Validate() (err error) {
	_, err = chat.GetUserAddress()
	if err != nil {
		return err
	}
	_, err = chat.GetReceiverAddress()
	return err
}
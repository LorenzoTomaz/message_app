package cli

import (
	"strconv"

	"github.com/LorenzoTomaz/message_app/x/messageapp/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdSendMessage() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "send-message [chatId] [sender] [receiver] [body]",
		Short: "Broadcast message sendMessage",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argChatId := args[0]
			argSender := args[1]
			argReceiver := args[2]
			argBody := args[3]
			

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgSendMessage(
				clientCtx.GetFromAddress().String(),
				argSender,
				argReceiver,
				argBody,
				argChatId,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

package cli

import (
	"context"

	"github.com/LorenzoTomaz/message_app/x/messageapp/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

func CmdShowChatCounter() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-chat-counter",
		Short: "shows chatCounter",
		Args:  cobra.NoArgs,
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryGetChatCounterRequest{}

			res, err := queryClient.ChatCounter(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

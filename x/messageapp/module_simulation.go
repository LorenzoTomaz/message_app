package messageapp

import (
	"math/rand"

	"github.com/LorenzoTomaz/message_app/testutil/sample"
	messageappsimulation "github.com/LorenzoTomaz/message_app/x/messageapp/simulation"
	"github.com/LorenzoTomaz/message_app/x/messageapp/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = messageappsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgSendMessage = "op_weight_msg_send_message"
	// TODO: Determine the simulation weight value
	defaultWeightMsgSendMessage int = 100

	opWeightMsgCreateChat = "op_weight_msg_create_chat"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateChat int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	messageappGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&messageappGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgSendMessage int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgSendMessage, &weightMsgSendMessage, nil,
		func(_ *rand.Rand) {
			weightMsgSendMessage = defaultWeightMsgSendMessage
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgSendMessage,
		messageappsimulation.SimulateMsgSendMessage(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateChat int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateChat, &weightMsgCreateChat, nil,
		func(_ *rand.Rand) {
			weightMsgCreateChat = defaultWeightMsgCreateChat
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateChat,
		messageappsimulation.SimulateMsgCreateChat(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}

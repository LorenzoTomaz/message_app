package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// MessagesKeyPrefix is the prefix to retrieve all Messages
	MessagesKeyPrefix = "Messages/value/"
)

// MessagesKey returns the store key to retrieve a Messages from the index fields
func MessagesKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}

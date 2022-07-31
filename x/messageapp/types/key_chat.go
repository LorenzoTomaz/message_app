package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// ChatKeyPrefix is the prefix to retrieve all Chat
	ChatKeyPrefix = "Chat/value/"
)

// ChatKey returns the store key to retrieve a Chat from the index fields
func ChatKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}

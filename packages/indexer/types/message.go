package types

type Message struct {
	Source       uint8         // Source where message was initiated
	Destination  uint8         // Destination chain of message
	DepositNonce uint64        // Nonce for the deposit
	Payload      []interface{} // data associated with event sequence
}

type Event struct{}

type SuiEvent struct {
	TxDigest          string                 `json:"txDigest"`
	EventSeq          string                 `json:"eventSeq"`
	PackageId         string                 `json:"packageId"`
	TransactionModule string                 `json:"transactionModule"`
	Sender            string                 `json:"sender"`
	Type              string                 `json:"type"`
	ParsedJson        map[string]interface{} `json:"parsedJson"`
	Bcs               string                 `json:"bcs"`
	TimestampMs       string                 `json:"timestampMs"`
}

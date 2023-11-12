package utils

import (
	"fmt"
)

func InterfaceArrayToString(arr []interface{}) string {
	hexString := "0x"
	for _, n := range arr {
		num, _ := n.(float64)
		hexString += fmt.Sprintf("%02x", int(num))
	}

	return hexString
}

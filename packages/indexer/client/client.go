package client

import (
	"context"

	"github.com/block-vision/sui-go-sdk/models"
	"github.com/block-vision/sui-go-sdk/sui"
)

type Client struct {
	cli sui.ISuiAPI
}

func NewClient(httpRpcUrl string) (*Client, error) {
	cli := sui.NewSuiClient(httpRpcUrl)
	return &Client{cli: cli}, nil
}

// fetch list of events for a specified query criteria.
func (c *Client) QueryCompEntities(ctx context.Context, pacakgeId string, module string, cursorTx string, cursorEventSeq string,
	limit uint64, descendingOrder bool) (models.PaginatedEventsResponse, error) {
	filter := models.SuiXQueryEventsRequest{
		SuiEventFilter: models.EventFilterByMoveEventModule{
			MoveEventModule: models.MoveEventModule{
				Package: pacakgeId,
				Module:  module,
			},
		},
		Limit:           limit,
		DescendingOrder: descendingOrder,
	}

	if cursorTx != "" {
		filter.Cursor = models.EventId{
			TxDigest: cursorTx,
			EventSeq: cursorEventSeq,
		}
	}

	return c.cli.SuiXQueryEvents(ctx, filter)
}

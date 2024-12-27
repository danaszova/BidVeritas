import { Bid, AuctionResult } from './auction.types';

export const runAuction = (bids: Bid[], floorPrice: number): AuctionResult | null => {
  // Filter bids below the floor price
  const validBids = bids.filter((bid) => bid.price >= floorPrice);

  if (validBids.length === 0) {
    console.log('No valid bids');
    return null;
  }

  // Sort bids by price (descending)
  validBids.sort((a, b) => b.price - a.price);

  // Select winner (Second-price auction logic)
  const winner = validBids[0];
  const priceToPay = validBids[1] ? validBids[1].price + 0.01 : winner.price;

  console.log(`Winner: ${winner.id}, Price Paid: ${priceToPay}`);

  return { winner, priceToPay };
};

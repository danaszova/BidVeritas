export interface Bid {
    id: string;       // Placement ID
    price: number;    // Bid price
  }
  
  export interface AuctionResult {
    winner: Bid;
    priceToPay: number;
  }
  
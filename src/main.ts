import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { startMockDSP } from '../DSP/mock-dsp';
import { Bid, AuctionResult } from './auction.types';
import { runAuction } from './auction';
import axios from 'axios';
import { faker } from '@faker-js/faker';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log('NestJS application is running on http://localhost:3000');

  // Start the Mock DSP Server
  startMockDSP();

  // Start the Bid Stream Simulation with Auction Workflow
  startBidStreamWithAuction();
}

// Generate a realistic bid request with multiple placements
function generateBidRequest(ssp: string, numPlacements: number) {
  const placements = Array.from({ length: numPlacements }, (_, i) => ({
    id: `placement-${i + 1}`,
    banner: {
      w: faker.helpers.arrayElement([300, 728]),
      h: faker.helpers.arrayElement([250, 90]),
    },
    bidfloor: parseFloat((Math.random() * (10 - 1) + 1).toFixed(2)), // Random float between 1 and 10 with 2 decimals
  }));

  return {
    id: faker.string.uuid(), // Unique request ID
    imp: placements,
    site: { domain: faker.internet.domainName() },
    device: {
      ua: faker.internet.userAgent(),
      ip: faker.internet.ipv4(),
      geo: { country: faker.address.countryCode() },
    },
    user: { id: faker.string.uuid() },
  };
}

async function startBidStreamWithAuction() {
  // Interval to simulate continuous bid stream
  setInterval(async () => {
    try {
      // Generate a bid request for multiple placements
      const bidRequest = generateBidRequest('smartadserver', 3); // 3 placements
      console.log('Generated Bid Request:', bidRequest);

      // Send the bid request to the mock DSP
      const dspResponse = await axios.post('http://localhost:4000/dsp-bid', bidRequest);
      const seatbids = dspResponse.data.seatbid[0].bid;

      // Process bids for each placement
      bidRequest.imp.forEach((placement) => {
        const placementBids: Bid[] = seatbids.filter((bid: Bid) => bid.id === placement.id);
        if (placementBids.length > 0) {
          const auctionResult: AuctionResult | null = runAuction(placementBids, placement.bidfloor);
          if (auctionResult) {
            console.log(`Auction Winner for Placement ${placement.id}:`, auctionResult);
          } else {
            console.log(`No valid bids for Placement ${placement.id}`);
          }
        }
      });
    } catch (error) {
      console.error('Error during bid stream processing:', error.message);
    }
  }, 500); // Run every 500ms
}

bootstrap();

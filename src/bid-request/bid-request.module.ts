import { Module } from '@nestjs/common';
import { BidRequestController } from './bid-request.controller';
import { BidRequestService } from './bid-request.service';

@Module({
  controllers: [BidRequestController],
  providers: [BidRequestService], // Add BidRequestService here
})
export class BidRequestModule {}

import { Module } from '@nestjs/common';
import { BidRequestModule } from './bid-request/bid-request.module';

@Module({
  imports: [BidRequestModule],
})
export class AppModule {}

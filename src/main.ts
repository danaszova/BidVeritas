import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { startBidStream } from '../bidStream/bid-stream';
import { startMockDSP } from '../DSP/mock-dsp';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log('NestJS application is running on http://localhost:3000');

  // Start the Mock DSP Server
  startMockDSP();

  // Start the Bid Stream Simulation
  startBidStream();
}
bootstrap();

import { Module } from '@nestjs/common';
import { ValidateResponseController } from './validate-response.controller';
import { ValidateResponseService } from './validate-response.service';

@Module({
  controllers: [ValidateResponseController],
  providers: [ValidateResponseService],
})
export class ValidateResponseModule {}

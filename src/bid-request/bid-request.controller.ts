import { Controller, Get, Query, Res, HttpException, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { BidRequestService } from './bid-request.service';

@Controller('generate-bid-request')
export class BidRequestController {
  constructor(private readonly bidRequestService: BidRequestService) {}

  @Get()
  generate(
    @Query('ssp') ssp: string,
    @Query('format') format: string,
    @Res() res: Response
  ) {
    try {
      // Validate query parameters
      if (!ssp || !format) {
        throw new Error('Both "ssp" and "format" parameters are required.');
      }

      // Use the service to get the template
      const template = this.bidRequestService.getBidRequestTemplate(ssp, format);
      return res.json(template);
    } catch (error) {
      // Handle errors gracefully
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}

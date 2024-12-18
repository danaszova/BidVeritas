import { Controller, Post, Body, Res, HttpException, HttpStatus } from '@nestjs/common';
import { ValidateResponseService } from './validate-response.service';
import { Response } from 'express';

@Controller('validate-bid-response')
export class ValidateResponseController {
  constructor(private readonly validateService: ValidateResponseService) {}

  @Post()
  validate(@Body() responseBody: object, @Res() res: Response) {
    const validationResult = this.validateService.validateBidResponse(responseBody);
    if (validationResult.valid) {
      return res.json({ status: 'Bid response is valid!' });
    } else {
      throw new HttpException(validationResult.errors, HttpStatus.BAD_REQUEST);
    }
  }
}

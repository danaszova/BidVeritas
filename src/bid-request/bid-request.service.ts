import { Injectable } from '@nestjs/common';
import { loadTemplate } from '../utils/load-template';

@Injectable()
export class BidRequestService {
  getBidRequestTemplate(ssp: string, format: string): object {
    // Call loadTemplate with both SSP name and format
    return loadTemplate(ssp, format);
  }
}

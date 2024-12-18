import { Injectable } from '@nestjs/common';
import { loadSchemaValidator } from '../utils/validator';

@Injectable()
export class ValidateResponseService {
  validateBidResponse(response: object): { valid: boolean; errors?: any[] } {
    const validate = loadSchemaValidator();
    const valid = validate(response);
    return valid ? { valid: true } : { valid: false, errors: validate.errors };
  }
}

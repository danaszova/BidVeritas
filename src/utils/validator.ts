import Ajv, { ValidateFunction } from 'ajv';
import * as fs from 'fs';

const ajv = new Ajv();

export const loadSchemaValidator = (): ValidateFunction => {
  const schema = JSON.parse(fs.readFileSync('src/schemas/openrtb_schema.json', 'utf-8'));
  return ajv.compile(schema);
};

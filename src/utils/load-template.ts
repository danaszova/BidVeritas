import { faker } from '@faker-js/faker';
import * as fs from 'fs';
import * as path from 'path';

export const loadTemplate = (ssp: string, format: string): object => {
  const filePath = path.join(process.cwd(), 'src', 'templates', ssp, `${format}.json`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Template for SSP '${ssp}' with format '${format}' not found.`);
  }

  const template = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  // Inject realistic dynamic data
  template.device = {
    ua: faker.internet.userAgent(),
    ip: faker.internet.ipv4(),
    geo: {
      lat: faker.address.latitude(),
      lon: faker.address.longitude(),
      country: faker.address.countryCode(),
      city: faker.address.city(),
    },
  };

  template.user = {
    id: faker.string.uuid(),
  };

  return template;
};

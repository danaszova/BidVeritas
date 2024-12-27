const axios = require('axios');
const faker = require('@faker-js/faker');

// Generate multiple bid requests for placements
const generateBidRequest = (ssp, numPlacements) => {
  const placements = Array.from({ length: numPlacements }, (_, i) => ({
    id: `placement-${i + 1}`,
    banner: { w: faker.helpers.randomize([300, 728]), h: faker.helpers.randomize([250, 90]) },
    bidfloor: faker.finance.amount(1, 10, 2), // Random bid floor
  }));

  return {
    id: faker.datatype.uuid(),
    imp: placements,
    site: { domain: faker.internet.domainName() },
    device: {
      ua: faker.internet.userAgent(),
      ip: faker.internet.ipv4(),
      geo: { country: faker.address.countryCode() },
    },
    user: { id: faker.datatype.uuid() },
  };
};

const sendBidRequest = async (ssp, numPlacements) => {
  const bidRequest = generateBidRequest(ssp, numPlacements);
  console.log('Generated Bid Request:', bidRequest);

  try {
    const response = await axios.post('http://localhost:4000/dsp-bid', bidRequest);
    console.log('Bid Response:', response.data);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

const startBidStream = () => {
  setInterval(() => {
    sendBidRequest('smartadserver', 2); // 2 placements per request
  }, 200);
};

module.exports = { startBidStream };

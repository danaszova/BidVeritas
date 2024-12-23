const axios = require('axios');
const pLimit = require('p-limit');

const limit = pLimit(10); // Limit concurrency to 10 requests

const generateBidRequest = async (ssp, format) => {
  try {
    const bidRequest = await axios.get(`http://localhost:3000/generate-bid-request?ssp=${ssp}&format=${format}`);
    console.log('Generated Bid Request:', bidRequest.data);

    const dspResponse = await axios.post('http://localhost:4000/dsp-bid', bidRequest.data);
    console.log('DSP Response:', dspResponse.data);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

const startBidStream = () => {
  setInterval(() => {
    limit(() => generateBidRequest('smartadserver', 'banner'));
    limit(() => generateBidRequest('xandr', 'video'));
  }, 200);
};

module.exports = { startBidStream };

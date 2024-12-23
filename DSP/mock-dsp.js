const express = require('express');

const startMockDSP = () => {
  const app = express();
  app.use(express.json());

  app.post('/dsp-bid', (req, res) => {
    const bidResponse = {
      id: req.body.id,
      price: (Math.random() * 10).toFixed(2), // Random bid price
      ad: {
        creative: '<div>Your Ad Here</div>',
      },
    };

    console.log('Bid Response:', bidResponse);
    res.json(bidResponse);
  });

  app.listen(4000, () => {
    console.log('Mock DSP Server running on http://localhost:4000');
  });
};

module.exports = { startMockDSP };

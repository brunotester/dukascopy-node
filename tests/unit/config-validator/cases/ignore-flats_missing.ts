const config = {
  instrument: 'eurusd',
  dates: {
    from: '2019-03-01',
    to: '2019-03-05'
  },
  timeframe: 'm1',
  priceType: 'bid',
  utcOffset: 0,
  volumes: true
};

const expectedOutput = {
  isValid: false,
  validationErrors: ["The 'ignoreFlats' field is required!"]
};

export { config, expectedOutput };
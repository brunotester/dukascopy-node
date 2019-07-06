const input = {
  data: [
    [
      [1562284200000, 1.12853, 1.12855, 1.12852, 1.12854, 55.88],
      [1562284260000, 1.12855, 1.12855, 1.12854, 1.12855, 20.76],
      [1562284320000, 1.12856, 1.1286, 1.12856, 1.12858, 127.53],
      [1562284380000, 1.12857, 1.12858, 1.12856, 1.12856, 26.38],
      [1562284440000, 1.12856, 1.12856, 1.12852, 1.12854, 34.01],
      [1562284500000, 1.12852, 1.12852, 1.12849, 1.12849, 59.51],
      [1562284560000, 1.1285, 1.1285, 1.12849, 1.12849, 17.44],
      [1562284620000, 1.12849, 1.12853, 1.12848, 1.12853, 41.57],
      [1562284680000, 1.12852, 1.12852, 1.12852, 1.12852, 9.94],
      [1562284740000, 1.12853, 1.12853, 1.12851, 1.12853, 94.05]
    ],
    [
      [1562284800000, 1.12853, 1.1286, 1.12853, 1.12857, 92.11],
      [1562284860000, 1.12858, 1.12858, 1.12847, 1.12848, 107.28],
      [1562284920000, 1.12848, 1.1285, 1.12846, 1.12847, 45.06],
      [1562284980000, 1.12847, 1.12847, 1.12842, 1.12842, 41.57],
      [1562285040000, 1.12842, 1.12842, 1.12831, 1.12832, 117.74],
      [1562285100000, 1.12832, 1.12839, 1.12832, 1.12839, 55.59],
      [1562285160000, 1.1284, 1.12843, 1.1284, 1.12842, 50.52],
      [1562285220000, 1.12842, 1.12843, 1.12837, 1.12837, 51.83],
      [1562285280000, 1.12837, 1.12837, 1.12827, 1.12831, 187.02],
      [1562285340000, 1.12831, 1.12834, 1.12828, 1.12833, 40.05]
    ]
  ],
  startDate: new Date('2019-07-04T23:55:00.000Z'),
  endDate: new Date('2019-07-05T00:05:00.000Z'),
  timeframe: 'm1'
};

const expectedOutput = [
  [1562284500000, 1.12852, 1.12852, 1.12849, 1.12849, 59.51],
  [1562284560000, 1.1285, 1.1285, 1.12849, 1.12849, 17.44],
  [1562284620000, 1.12849, 1.12853, 1.12848, 1.12853, 41.57],
  [1562284680000, 1.12852, 1.12852, 1.12852, 1.12852, 9.94],
  [1562284740000, 1.12853, 1.12853, 1.12851, 1.12853, 94.05],
  [1562284800000, 1.12853, 1.1286, 1.12853, 1.12857, 92.11],
  [1562284860000, 1.12858, 1.12858, 1.12847, 1.12848, 107.28],
  [1562284920000, 1.12848, 1.1285, 1.12846, 1.12847, 45.06],
  [1562284980000, 1.12847, 1.12847, 1.12842, 1.12842, 41.57],
  [1562285040000, 1.12842, 1.12842, 1.12831, 1.12832, 117.74]
];

export { input, expectedOutput };
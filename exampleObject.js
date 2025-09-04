const costMonitoringClusterObject = {
  cc: [],
  issue: {
    Issue: 'Cost threshold of 5 passed',
    clusters: [
      {
        totalCost: 139.82440699999995,
        clusterName: 'Cluster 1',
        compileCost: 0.1640100000000004,
        executeCost: 83.56390799999996,
        'Discovered At': '9/2/2025, 9:27:08 PM',
        fileAccessCost: 56.09648899999992,
      },
      {
        totalCost: 17.36750654399995,
        clusterName: 'Cluster 2',
        compileCost: 1.12140100000000004,
        executeCost: 9.43390799999996,
        'Discovered At': '9/2/2025, 9:27:08 PM',
        fileAccessCost: 14.09648899999992,
      },
    ],
  },
  remedy: {
    Instruction:
      'Please contact one of the following to facilitate issue resolution:',
    'Primary Contact': ['test@example.com'],
    'Secondary Contact': [],
  },
  subject:
    'Cost Monitoring Alert from tombolo_instance : Cost threshold $5 passed',
  applicationId: '75809731-77fd-468e-832f-187993216b7d',
  idempotencyKey:
    'CM|75809731-77fd-468e-832f-187993216b7d|75809731-77fd-468e-832f-187993216b7d|clusters|75809731-77fd-468e-832f-187993216b7d,75809731-77fd-468e-832f-187993216b7d|2025-09-02||sum:false:gte:5|total:139.82',
  mainRecipients: ['test@example.com'],
  notificationId: 'CM_NUMBERS_NUMBERS',
  notificationOrigin: 'Cost Monitoring',
  notificationDescription:
    'Cost Monitoring (all cm per cluster) detected that clusters have passed the cost threshold',
};

const costMonitoringUserObject = {
  cc: [],
  issue: {
    Issue: 'Cost monitoring threshold of 1 passed',
    Users: [
      {
        username: 'user1',
        totalCost: 21.10736,
        clusterName: 'cluster1',
        compileCost: 0.00004,
        executeCost: 6.21382,
        fileAccessCost: 14.8935,
      },
      {
        username: 'user2',
        totalCost: 4.39088,
        clusterName: 'cluster1',
        compileCost: 0.00008,
        executeCost: 3.56238,
        fileAccessCost: 0.82842,
      },
      {
        username: 'user1',
        totalCost: 39.10736,
        clusterName: 'cluster2',
        compileCost: 2.00004,
        executeCost: 17.21382,
        fileAccessCost: 19.8935,
      },
      {
        username: 'user2',
        totalCost: 8.89088,
        clusterName: 'cluster2',
        compileCost: 3.00008,
        executeCost: 4.56238,
        fileAccessCost: 1.82842,
      },
    ],
    clusters: [
      { ClusterName: 'cluster1', 'Discovered At': '9/3/2025, 5:25:03 PM' },
      { ClusterName: 'cluster2', 'Discovered At': '9/3/2025, 5:25:03 PM' },
    ],
  },
  remedy: {
    Instruction:
      'Please contact one of the following to facilitate issue resolution:',
    'Primary Contact': ['test@example.com'],
    'Secondary Contact': [],
  },
  subject:
    'Cost Monitoring Alert from tombolo_dev_1 : Cost threshold $1 passed',
  applicationId: '75809731-77fd-468e-832f-187993216b7d',
  idempotencyKey:
    'CM|75809731-77fd-468e-832f-187993216b7d|75809731-77fd-468e-832f-187993216b7d|users|75809731-77fd-468e-832f-187993216b7d|2025-09-03|user1,user2|sum:false:gte:1|total:25.50',
  mainRecipients: ['test@example.com'],
  notificationId: 'CM_NUMBERS_NUMBERS',
  notificationOrigin: 'Cost Monitoring',
  notificationDescription:
    'Cost Monitoring (data land user1/user2) detected that users have passed the cost threshold',
};
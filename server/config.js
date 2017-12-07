const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://justin:password@ds127436.mlab.com:27436/graphite-dev',
  port: process.env.PORT || 8000,
};

export default config;

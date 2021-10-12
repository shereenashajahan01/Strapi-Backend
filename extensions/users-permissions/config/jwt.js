module.exports = {
  jwtSecret: process.env.JWT_SECRET || '72e59986-6e97-4bf5-b2b2-0c5625362364',
  jwt: {
    expiresIn: "1000d",
  }
};
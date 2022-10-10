const variables = {
  Api: {
    port: process.env.port || 3000,
  },
  Database: {
    connection:
      process.env.connection ||
      "mongodb+srv://admin:nofood123456@cluster0.rux3o3c.mongodb.net/?retryWrites=true&w=majority",
  },

  Security: {
    secretKey:
      "c639c49ea8fc1e07f77f7b7eb9397f56|8d5c5f954948c51c27d0337f53578dea",
  },
};
module.exports = variables;

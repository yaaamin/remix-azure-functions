const { createRequestHandler } = require("@derkoe/remix-azure-functions");

module.exports = createRequestHandler({ build: require("./build") });

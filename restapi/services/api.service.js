const { ServiceBroker } = require("moleculer");
const ApiGateway = require("moleculer-web");

// Load API Gateway
module.exports = {
	name: "api",
	mixins: [ApiGateway],
    
    settings: {
        port: process.env.PORT || 3000,
        routes: [{
            path: "/api",
            aliases: {
                "GET urlwc": "urlhandler.wordcountget",
                "POST urlwc": "urlhandler.wordcountpost"
            }
        }]
    }
};

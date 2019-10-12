var server = require("./routerserver");
var router = require("./router");

server.start(router.route);


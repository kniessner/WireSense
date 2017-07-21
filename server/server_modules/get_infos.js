var os = require('os');
var ifaces = os.networkInterfaces();
var server_ip;

module.exports.fiz = function () {
  console.log('fiz!');
}

//module.exports.area = (r) => PI * r ** 2;

module.exports.current_date = function () {
  return Date();
}

  Object.keys(ifaces).forEach(function (ifname) {
      var alias = 0;
      ifaces[ifname].forEach(function (iface) {
        if ('IPv4' !== iface.family || iface.internal !== false) {
          // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
          return;
        }
        if (alias >= 1) {
          //this single interface has multiple ipv4 addresses
          //console.log(ifname + ':' + alias, iface.address);
        } else {
          //this interface has only one ipv4 adress
          //console.log(ifname, iface.address);
        }
        server_ip = iface.address ;
        ++alias;
      });
    });
module.exports.server_ip = server_ip;
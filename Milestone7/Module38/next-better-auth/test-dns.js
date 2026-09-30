const dns = require("dns");

dns.resolveSrv("_mongodb._tcp.cluster0.z7ejuv7.mongodb.net", (error, addresses) => {
  if (error) {
    console.error("❌ Node DNS failed");
    console.error(error);
    return;
  }

  console.log("✅ Node DNS works");
  console.log(addresses);
});
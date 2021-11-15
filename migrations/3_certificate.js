var certificate = artifacts.require("./certificate.sol");

module.exports = function (deployer) {
  deployer.deploy(certificate);
};

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("HalasModule", (m) => {
  const halas = m.contract("Halas");

  return { halas };
});




// 0x5FbDB2315678afecb367f032d93F642f64180aa3
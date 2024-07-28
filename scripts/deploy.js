const { ethers } = require("hardhat");

async function main() {
  const perc20 = await ethers.deployContract("PERC20Sample");
  await perc20.waitForDeployment();
  
  console.log(`deployed to ${perc20.target}`)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
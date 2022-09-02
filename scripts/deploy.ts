import {ethers} from "hardhat";
import {ReturnLimitTest__factory} from "../typechain-types";

async function main() {
  const accounts = await ethers.getSigners();
  const factory = new ReturnLimitTest__factory(accounts[0]);
  const instance = await factory.deploy();
  console.log(instance.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

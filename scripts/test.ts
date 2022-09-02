import * as hre from "hardhat";
import {program} from "commander";
import {ReturnLimitTest__factory} from "../typechain-types";

async function main() {
  program.option("-instance, --instance <string>")
  program.parse();

  const BN = hre.ethers.BigNumber;
  const accounts = await hre.ethers.getSigners();
  const factory = new ReturnLimitTest__factory(accounts[0]);
  const instance = factory.attach(program.opts().instance);
  await instance.addToArray(1023);
  console.log("array size,estimated gas,execution time")
  for (let i = 1; i < 10000000000000000; i++) {
    const start = Date.now();
    const estimatedGas = await instance.estimateGas.getArray({
      gasLimit: BN.from("18446744073709551615")
    });
    const finish = Date.now();
    await instance.addToArray(1024);
    console.log((i * 1024 * 32).toString() + ',' + estimatedGas.toString() + ',' + (finish - start).toString());
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

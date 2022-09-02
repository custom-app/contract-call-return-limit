import * as hre from "hardhat";
import {program} from "commander";
import {ReturnLimitTestWithPagination__factory} from "../typechain-types";

async function main() {
  program.option("-instance, --instance <string>")
  program.parse();

  const accounts = await hre.ethers.getSigners();
  const factory = new ReturnLimitTestWithPagination__factory(accounts[0]);
  const instance = factory.attach(program.opts().instance);
  await instance.addToArray(1023);
  console.log("array size,execution time,one call execution times")
  for (let i = 1; i < 10000000000000000; i++) {
    const start = Date.now();
    const oneCall = [];
    for (let j = 0; j < i; j++) {
      const start = Date.now();
      await instance.estimateGas.getArray(j, 1024);
      oneCall.push((Date.now() - start));
    }
    const finish = Date.now();
    await instance.addToArray(1024);
    console.log((i * 1024 * 32).toString() + ',' + (finish - start).toString() + ',' + oneCall.join(";"));
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

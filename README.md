# Contract call return limit test

## Dependencies
```bash
yarn add global ts-node # npm install -g ts-node
yarn --dev # npm install --save-dev
```
### Run default scenario
First, running instance of Hardhat network is required:
```bash
yarn hardhat node # npx hardhat node
```

Then, ReturnLimitTest contract must be deployed:
```bash
yarn hardhat run --network localhost scripts/deploy.ts # npx hardhat run --network localhost scripts/deploy.ts
```

Finally, we can start our test scenario:
```bash
HARDHAT_NETWORK=localhost ts-node scripts/test.ts --instance ${address from output of previous command} 
```
### Run pagination scenario
First, running instance of Hardhat network is required:
```bash
yarn hardhat node # npx hardhat node
```

Then, ReturnLimitTest contract must be deployed:
```bash
yarn hardhat run --network localhost scripts/deploy-pagination.ts # npx hardhat run --network localhost scripts/deploy-pagination.ts
```

Finally, we can start our test scenario:
```bash
HARDHAT_NETWORK=localhost ts-node scripts/test-pagination.ts --instance ${address from output of previous command} 
```
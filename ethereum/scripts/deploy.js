const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledContract = require("./build/ERC20.json");

const provider = new HDWalletProvider(
  "",
  "https://rinkeby.infura.io/v3/7c4e9e4322bc446195e561d9ea27d827"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log(`Attempting to deploy from account: ${accounts[0]}`);

  const deployedContract = await new web3.eth.Contract(compiledContract.abi)
    .deploy({
      data: "0x" + compiledContract.evm.bytecode.object,
      arguments: ["TOKEN NAME", "TOKEN SYMBOL", 100],
    })
    .send({
      from: accounts[0],
      gas: "2000000",
    });

  console.log(
    `Contract deployed at address: ${deployedContract.options.address}`
  );

  console.log(
    `Contract deployed at address: ${deployedContract.options.address}`
  );

  console.log(
    `Contract deployed at address: ${deployedContract.options.address}`
  );
  provider.engine.stop();
};

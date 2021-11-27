require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney arena oxygen food edge release stereo unknown coral light army gentle'; 
let testAccounts = [
"0xd822eb6a4bac69b59b13af058f41464584824c76d7914183a401e670b6df1071",
"0x31f066254f7a35b7624704f07dbf52590a92d4ad9e66e24fdafb4f64a2bc26b0",
"0x19fe0cc92eeb94cc88072ab5a9cc587f91286e9b41327709220962ab8f041220",
"0x5f0eb198e3489c3ae35857189582c06c901aced6555d9e375e2fc9c4d364c9ee",
"0xca91db4b456914cf2baf24c05b65c833df682daf12ca667a596c6fbfc4a0a519",
"0x14fb47c126fa6bad0586749f9781df709d3f6d04bbe4f98b43968b460e16fa10",
"0xb43d66e0d9916d6f955f536e3c6db4adaf613a892cdb73e617eb14edcac4a78b",
"0x4c57700f352260be0e0f9887ab356e5f486b4ba733359a96d16c067b286747b9",
"0x561e09cfa7d6fe984a7add97bba1cf35fd05c69d483ba56f5bb9b81d751606e8",
"0xe5d71ab0930b77887701cbfeb48cd5b81f9b7cc45af2e19914cea0fa41a3c587"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remind concert hunt option broken squeeze'; 
let testAccounts = [
"0x47f57e63950778d11fd76d86744bd22b2545da814dfe7142eee3ef19a99d1210",
"0x225a9baf851a5791f75cbf0aac861402d65886ba2d8ea700954369276cfd7345",
"0xf75334a8664597218aa70b93ec82b98d8853800c1786fe14e6f317881752666d",
"0xd07b254cc79508b72cb36a694a31df355063a16f7c4915cebe5bc8cd8e4d8a18",
"0xb61832a50d67d5a140ef5a4704c6fb433b093aa2d442ca9fc061a297590d46ba",
"0x880b392582ac1ca5052f93fe65f3748d7bb454e139e25576956d49a422561bb6",
"0x3def9e84f288ad9f82df88442f83c5948d079d14d5d1fe50db54aaca806dad21",
"0x5e6578c5b6b8197706cd093a8b8c7d8ba84197f9f0ff9f14021c9eab1468334b",
"0xfd2c9f64bb2c42f55ecac6640ccf65aa4d056ae12adcc677e4a8647007a05e3d",
"0x40953f8f66cba19939b4ae5ffb8b6f9a7188707eb5ef01e6249aa0e64d8b4041"
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



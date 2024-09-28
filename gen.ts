import { EthrDID } from 'ethr-did';
import { ethers } from 'ethers';

// Generate a new Ethereum wallet (private key and address)
async function generateDidEthr() {
    // Create a random Ethereum wallet
    const wallet = ethers.Wallet.createRandom();

    // Create a new EthrDID instance
    const did = new EthrDID({
        address: wallet.address,
        privateKey: wallet.privateKey,
        provider: 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID', // Use your Infura project ID
    });

    // Output the DID and wallet details
    console.log('DID:', did.did);
    console.log('Address:', wallet.address);
    console.log('Private Key:', wallet.privateKey);
}

// Run the function
generateDidEthr().catch(console.error);


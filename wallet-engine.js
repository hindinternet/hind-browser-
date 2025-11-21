// wallet-engine.js
// Hind Browser Wallet Engine – Automatic Web3 Wallet Management

const crypto = require('crypto');
const ethers = require('ethers'); // Ethereum library, Web3 compatible

class WalletEngine {

    constructor() {
        this.wallets = {}; // userId -> wallet object
    }

    // 1️⃣ Create or load wallet for user
    createWallet(userId) {
        if (this.wallets[userId]) return this.wallets[userId];

        // Generate random mnemonic
        const mnemonic = ethers.Wallet.createRandom().mnemonic.phrase;
        const wallet = ethers.Wallet.fromMnemonic(mnemonic);

        this.wallets[userId] = {
            address: wallet.address,
            privateKey: wallet.privateKey,
            mnemonic: mnemonic
        };
        return this.wallets[userId];
    }

    // 2️⃣ Get wallet info
    getWallet(userId) {
        return this.wallets[userId] || this.createWallet(userId);
    }

    // 3️⃣ Sign a transaction (example)
    async signTransaction(userId, tx) {
        const walletObj = this.getWallet(userId);
        const wallet = new ethers.Wallet(walletObj.privateKey);
        const signedTx = await wallet.signTransaction(tx);
        return signedTx;
    }

    // 4️⃣ Send transaction
    async sendTransaction(userId, tx, providerUrl) {
        const walletObj = this.getWallet(userId);
        const provider = new ethers.providers.JsonRpcProvider(providerUrl);
        const wallet = new ethers.Wallet(walletObj.privateKey, provider);
        const response = await wallet.sendTransaction(tx);
        return response;
    }

    // 5️⃣ Encrypt wallet (for local storage)
    encryptWallet(userId, password) {
        const walletObj = this.getWallet(userId);
        const cipher = crypto.createCipher('aes-256-cbc', password);
        let encrypted = cipher.update(JSON.stringify(walletObj), 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return encrypted;
    }

    // 6️⃣ Decrypt wallet
    decryptWallet(encrypted, password) {
        const decipher = crypto.createDecipher('aes-256-cbc', password);
        let decrypted = decipher.update(encrypted, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return JSON.parse(decrypted);
    }

}

// Singleton export
module.exports = new WalletEngine();

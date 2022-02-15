const Web3 = require('web3');
const Discord = require('discord.js')

const data = {
    id: 'id',
    token: 'token'
}

const webhook = new Discord.WebhookClient(data)

class TransactionChecker {
    web3;
    account;

    constructor(projectId, account) {
        this.web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/' + 'projectId'));
        this.account = account.toLowerCase();
    }

    async checkBlock() {
        let block = await this.web3.eth.getBlock('latest');
        let number = block.number;
        console.log('Searching block ' + number);
        webhook.send(`Block ${number} is under control.......`)
        if (block != null && block.transactions != null) {
            for (let txHash of block.transactions) {
                let tx = await this.web3.eth.getTransaction(txHash);
                console.log(txHash);
                if (this.account == (tx.to || '').toLowerCase()) {
                    console.log('Transaction found on block: ' + number);
                    console.log({address: tx.from, value: this.web3.utils.fromWei(tx.value, 'ether'), timestamp: new Date()});
                }
            }
        }
    }
}

let txChecker = new TransactionChecker(process.env.INFURA_ID, '0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5');
setInterval(() => {
    txChecker.checkBlock();
}, 15 * 1000);
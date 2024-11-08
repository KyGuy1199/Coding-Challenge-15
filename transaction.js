//Task 3: Create the Transaction Madule

export class Transaction {
    constructor(assetId, type, quantity)
        this.asset = getAssetById(assetId);
        this.type = type;
        this.quantity = quantity;

        if (!this.asset) {
            throw new Error("Asset Not Found");
        }

        this.processTransaction();
}

processTransaction() {
    if (this.type === "buy") {
        this.asset.quantity += this.quantity;
    } else if (this.type === "sell") {
        if (this.asset.quantity < this.quantity) {
            throw new Error(`Insufficient quantity for sale of ${this.asset.name}`);
        }
        this.asset.quantity -= this.quantity;
    } else {
        throw new Error("Invalid transaction type, use 'buy' or 'sell'.");
    }
}
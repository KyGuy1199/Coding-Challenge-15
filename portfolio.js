//Task 2: Create the Portfolio Module

import {assets} from "./asset.js";

export function calculatePortfolioValue() {
    return assets.reduce((total, asset) => total + (asset.price * asset.quantity), 0);
}       //funtion for calculating total portfolio value

export function getPortfolioAllocation() {
    const totalValue = calculatePortfolioValue();
    return assets.map(assets => ([
        name: asset.name,
        allocation: ((asset.price * asset.quantity) / totalValue * 100).toFixed(2) +"%"
    ]));        //Function to calculate the percentage allocation of each asset
}


//Task 4: Create the Main Application

import {calculatePortfolioValue, getPortfolioAllocation} from "./portfolio.js";
import {transaction} from "./transaction.js";       

console.log("Initial Portfolio Value:", calculatePortfolioValue());     //Display Initial portfolio value and allocation
console.log("Initial Portfolio Allocation:", calculatePortfolioAllocation());

try {
    const buyTransaction = new Transaction(1, "buy", 5);
    console.log(`Bought 5 units of ${buyTransaction.asset.name}`);

    const sellTransaction = new Transaction(2, "sell", 2);
    console.log(`Sold 2 units of ${sellTransaction.asset.name}`);

    console.log("Updated Portfolio Value:", calculatePortfolioValue());
    console.log("Updated Portfolio Allocation:", getPortfolioAllocation());     //Display portfolio and allocation values updated after transactions 
    } catch (error) {
        console.error("Transaction Error:", error.message);
    }
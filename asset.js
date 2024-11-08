//Task 1: Create the Asset Module

const assets = [
    {id: 1, name: "Disney.", type: "stock", price: 100, quantiy: 4},
    {id: 1, name: "Universal.", type: "stock", price: 59, quantiy: 3},
    {id: 1, name: "SpaceX.", type: "stock", price: 1000, quantiy: 8},
    {id: 1, name: "U.S. Treasury Bond", type: "bond", price: 1100, quantiy: 5},
];      //Defined assets array

export function getAssetById(id) {
    return assets.find(asset => asset.id === id);       //Function using ID to get the asset.
}

export { assets };
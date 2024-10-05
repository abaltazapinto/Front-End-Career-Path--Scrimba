import itemsBoughtArr from './itemsBoughtArr.mjs';

function calculateTotalCost(itemsBoughtArr){
/*
Challenge:
1. Use the reduce method to calculate the total 
   cost of items which have been bought.
*/

    const total = itemsBoughtArr.reduce((t, c) => t + c.priceUSD, 0); 
    return total
}

console.log(calculateTotalCost(itemsBoughtArr))
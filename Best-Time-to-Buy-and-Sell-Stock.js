/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if(prices.length < 2){
    return 0;
  }
  let profit = 0;
  let minPrice = Number.MAX_VALUE;
  for(let thisDay = 0; thisDay <= prices.length; thisDay++){
    if(minPrice > prices[thisDay]){
      minPrice = prices[thisDay];
    }
    else if( profit < (prices[thisDay] - minPrice) ){
      profit = prices[thisDay] - minPrice;
    }
  }
  return profit;
};


console.log(maxProfit([7,1,5,3,6,4]))

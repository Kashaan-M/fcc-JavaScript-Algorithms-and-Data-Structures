function checkCashRegister(price, cash, cid) {

  let changeDue = cash*100 - price*100;
  // here I multiply with 100 to avoid issues which JavaScript has with floats
  let sum = cid.reduce((total,currency) => total + currency[1]*100,0);
  // here I use reduce() to sum up all the money in cid
  
  if( changeDue > sum) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  } 
  else if(changeDue === sum) {
    return {status: "CLOSED", change: cid};
  }
  else {
    let result = [];
    cid = cid.reverse(); 
    // reverse() is used because money needs to be from highest bill to lowest coin

    let currencyValues = {
      "ONE HUNDRED":10000,
      "TWENTY": 2000,
      "TEN" :1000,
      "FIVE":500,
      "ONE": 100,
      "QUARTER": 25,
      "DIME": 10,
      "NICKEL": 5,
      "PENNY": 1
    };

    for(let elem of cid) {
      
      let moneyName = elem[0];
      let moneyValue = elem[1];
      let changeHolder = [moneyName, 0];
      // changeHolder is basically an array to manage inbetween calculations and pass on the 
      // the required moneyName and money amount into our result array which we will return in the end

      moneyValue = moneyValue * 100;

      while(changeDue >= currencyValues[moneyName] && moneyValue > 0) {
        // as long as changeDue is greater than currencyValues[moneyName] and moneyValue is greater than zero
        // this while loop will run and below conditions make sure it terminates 

        changeDue -= currencyValues[moneyName];
        // decrement changeDue by currency unit amount
        moneyValue -= currencyValues[moneyName];
        // decrement cash in drawer array by currency unit amount
        changeHolder[1] += currencyValues[moneyName] / 100;
        // increment changeHolder[1] which is the amount of money by the currency unit amount
      }
      if(changeHolder[1] > 0) {
        // i.e. if there is some money in the changeHolder push changeHolder to result
        result.push(changeHolder);
      }
    }
    if(changeDue > 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    return{status:"OPEN", change: result};
  }
}



// console.log( checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) );
console.log( checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) );
// console.log( checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) );
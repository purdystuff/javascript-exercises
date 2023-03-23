const sumAll = function(num1, num2) {
    let sum = 0;

    if (num1 <= 0 || num2 <= 0) return "ERROR";
        else if (typeof(num1) != 'number' || typeof(num2) != 'number') return "ERROR";
        else if (num1 > num2) num2 = num1;

    for(i=0;i<num2;i++){  
        sum += (i+1);
    }

    return sum;
        
};
//console.log(sumAll(1, 4))
// Do not edit below this line
module.exports = sumAll;

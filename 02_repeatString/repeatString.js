const repeatString = function(string, num) {

   if(num < 0) return "ERROR";
    
   string = string.repeat(num);
    return string;
};

// Do not edit below this line
module.exports = repeatString;
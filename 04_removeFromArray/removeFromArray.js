const removeFromArray = function(arr, ...args) {
    //my first attempt...using a nested loop but I wasn't able to complete all of the tests
    // let myArr = arr;

    // for(i=0;i<arr.length-1;i++){
    //     for(j=0;j<arguments.length;j++)
    //     if(myArr[i]===arguments[j]){
    //         myArr.splice(i, 1);
    //     }

    // }

    // return myArr;

    //this is the much simpler solution, using a for each and a rest operator

    let myArr = [];

    arr.forEach(element => {
        if(!args.includes(element)){
            myArr.push(element);
        }
    });

    return myArr;

};

//testing

//console.log(removeFromArray([1,2,3,4, "taco"], 3, 2, "taco"))

// Do not edit below this line
module.exports = removeFromArray;

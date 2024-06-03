// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    let num1Str = num1.toString();
    let num2Str = num2.toString();
    if (num1Str.length !== num2Str.length) return false;

    let num1Obj = {};
    let num2Obj = {};
    for (let num of num1Str) {
        num1Obj[num] = (num1Obj[num] || 0) + 1;
    }
    for (let num of num2Str) {
        num2Obj[num] = (num2Obj[num] || 0) + 1;
    }
    for (let key in num1Obj) {
        if (num1Obj[key] !== num2Obj[key]) return false;
    }
    return true;
}

module.exports = sameFrequency;
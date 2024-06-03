// add whatever parameters you deem necessary
function separatePositive(arr1) {
    let left = 0;
    let right = arr1.length - 1;
    
    while (left < right) {
        if (arr1[left] < 0 && arr1[right] > 0) {
            [arr1[left], arr1[right]] = [arr1[right], arr1[left]];
        }
        if (arr1[left] > 0) left++;
        if (arr1[right] < 0) right--;
    }
    return arr1;
}

module.exports = separatePositive;

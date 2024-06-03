// add whatever parameters you deem necessary
function countPairs(arr1, num) {
    let count = 0;
    let left = 0;
    let right = arr1.length - 1;
    arr1.sort((a, b) => a - b);

    while (left < right) {
        let sum = arr1[left] + arr1[right];
        if (sum === num) {
            count++;
            left++;
            right--;
        } else if (sum < num) {
            left++;
        } else {
            right--;
        }
    }

    return count;
}

module.exports = countPairs;
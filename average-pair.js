// add whatever parameters you deem necessary
function averagePair(array, targetAvg) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let avg = (array[left] + array[right]) / 2;
    if (avg === targetAvg) {
      return true;
    } else if (avg < targetAvg) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}

module.exports = averagePair;

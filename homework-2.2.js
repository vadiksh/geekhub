// max, min, sum, replaced min and max

var arr = [NaN,undefined,-5,1,44,-12,-2,-1];
homework(arr);

function homework(array) {
  var minIndex;
  var maxIndex;
  var result = {
    sum: 0
  };

  for (var i = 0; i < array.length; i++) {
      if (array[i] && !isNaN(array[i])) {
        result.sum = result.sum + array[i];

        if(!result.max || array[i] > result.max) {
          result.max = array[i];
          maxIndex = i;
        } else if (!result.min || array[i] < result.min) {
          result.min = array[i];
          minIndex = i;
        }
      }
    }
    array[minIndex] = result.max;
    array[maxIndex] = result.min;
    result.reordered = array;

    return result;
}




function arrayToObject(array) {
  var object = {};

  for (var i = 0; i < array.length; i++) {
    object[array[i]] = i;
  }
  return object;
}

var arr = [7,3,-12,55,73];
arrayToObject(arr);


// function with callback

function hideOddNumbers(from, to, callback) {
  for (var i = from; i <= to; i++) {
    if(!(i % 2)) {
      console.log(i);
    } 
  }
  callback();
}
function completed() {
  console.log('function completed!');
}
hideOddNumbers(15, 25, completed);

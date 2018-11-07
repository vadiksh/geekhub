function homework(array) {
  var max;
  var min;
  var minIndex;
  var maxIndex;
  var sum = 0;
  var result = {};

  for (var i = 0; i < array.length; i++) {
    if(array[i] == undefined || isNaN(array[i])) continue;
    if(max == undefined || array[i] > max) max = array[i];
  }
  result['Max number'] = max;

  for (var i = 0; i < array.length; i++) {
    if(array[i] == undefined || isNaN(array[i])) continue;
    if (min == undefined || array[i] < min) min = array[i];
  }
  result['Min number'] = min;

  for (var i = 0; i < array.length; i++) {
    if (array[i] == undefined || isNaN(array[i])) continue;
    else sum = sum + array[i];
  }
  result['Sum'] = sum;

  for (var i = 0; i < array.length; i++) {
    if (array[i] == undefined || isNaN(array[i])) continue;

    if (maxIndex == undefined || array[i] > array[maxIndex]) {
      maxIndex = i;
      max = array[i];
    }

    if (minIndex == undefined || array[i] < array[minIndex]) {
      minIndex = i;
      min = array[i];
    }  
  }
  array[minIndex] = max;
  array[maxIndex] = min;
  result['Reordered array'] = array;

  return result;
}

var arr = [NaN,undefined,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1];
homework(arr);



function arrayToObject(array) {
  var object = {};

  for (var i = 0; i < array.length; i++) {
    object[array[i]] = i;
  }
  return object;
}

var arr = [7,3,-12,55,73];
arrayToObject(arr);
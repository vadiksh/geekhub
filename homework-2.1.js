var arr = [16,3,2,1,9,4,10,4,2,11,6,1,8];

countWaterSum(arr);

function countWaterSum(array) {
  var peaks = [];
  var waterSum = 0;

  if(array[0] > array[1]) {
    peaks.push(0);
  }
  for (var i = 2; i <= array.length - 1; i++) {
    if(array[i - 2] <= array[i - 1] && array[i - 1] > array[i]) {
      peaks.push(i - 1);
    }
  }
  if(array[array.length - 1] > array[array.length - 2]) {
    peaks.push(array.length - 1);
  }
  for(var j = 1; j <= peaks.length - 1; j++) {
    if(array[peaks[j - 1]] > array[peaks[j]]) {
      for (var k = peaks[j]; k < array.length; k++) {
        if(array[k] > array[peaks[j]]) {
         peaks.splice(j, 1);
        }
      }
    }
  }

  console.log('Initial Array: ' + array);
  console.log('Peaks Indexes: ' + peaks);

  for(var l = 0; l <= peaks.length - 1; l++) {
    if(array[peaks[l]] > array[peaks[l + 1]]) {
      for(var b = peaks[l] + 1; b < peaks[l + 1]; b++) {
        var difference = array[peaks[l + 1]] - array[b];
        waterSum = waterSum + difference;
      }
    } else if(array[peaks[l]] <= array[peaks[l + 1]]) {
      for(var h = peaks[l] + 1; h < peaks[l + 1]; h++) {
        var difference = array[peaks[l]] - array[h];
        waterSum = waterSum + difference;
      }
    }
  }

  return waterSum;
};
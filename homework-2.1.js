var arr = [16,3,2,1,9,4,10,4,2,11,6,1,8];
var peaks = [];
var waterSum = 0;

if(arr[0] > arr[1]) {
  peaks.push(0);
}
for (var i = 2; i <= arr.length - 1; i++) {
  if(arr[i - 2] <= arr[i - 1] && arr[i - 1] > arr[i]) {
    peaks.push(i - 1);
  }
}
if(arr[arr.length - 1] > arr[arr.length - 2]) {
  peaks.push(arr.length - 1);
}
for(var j = 1; j <= peaks.length - 1; j++) {
  if(arr[peaks[j - 1]] > arr[peaks[j]]) {
    for (var k = peaks[j]; k < arr.length; k++) {
      if(arr[k] > arr[peaks[j]]) {
       peaks.splice(j, 1);
      }
    }
  }
}

console.log('Initial Array: ' + arr);
console.log('Peaks Indexes: ' + peaks);

for(var l = 0; l <= peaks.length - 1; l++) {
  if(arr[peaks[l]] > arr[peaks[l + 1]]) {
    for(var b = peaks[l] + 1; b < peaks[l + 1]; b++) {
      var difference = arr[peaks[l + 1]] - arr[b];
      waterSum = waterSum + difference;
    }
  } else if(arr[peaks[l]] <= arr[peaks[l + 1]]) {
    for(var h = peaks[l] + 1; h < peaks[l + 1]; h++) {
      var difference = arr[peaks[l]] - arr[h];
      waterSum = waterSum + difference;
    }
  }
}

console.log('Water Sum: ' + waterSum);
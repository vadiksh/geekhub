Array.prototype.myForEach = function(callback, context) {
  for(i = 0; i < this.length; i++) {
    callback.call(context, this[i], i, this); 
  }
}

Array.prototype.myMap = function(callback, context) {
  let newArray = [];
  for(i = 0; i < this.length; i++) {
    newArray[i] = callback.call(context, this[i], i, this);
  }
  return newArray;
}

Array.prototype.mySort = function() { 
  for(var k = this.length - 1; k >= 0; k--) {
     for(var j = 1; j <= k; j++){
       if(this[j-1].toString() > this[j].toString()){
           var temp = this[j-1];
           this[j-1] = this[j];
           this[j] = temp;
        }
     }
  }
	return this;
}

Array.prototype.myFilter = function(callback, context) {
  let newArray = [];
  for(i = 0; i < this.length; i++) {
    var bool = callback.call(context, this[i], i, this);
    if (bool == true) {
    	newArray[newArray.length] = this[i];
    }
  }
  return newArray;
}

Array.prototype.myPush = function(...args) {
	for(i = 0; i < args.length; i++) {
    this[this.length] = args[i];
  }
  console.log(this);
  return this.length;
}

function breakOut(array, changeValue, stopValue){
  for (let i = 0; i < array.length; i++) {
  if (typeof array[i] !== 'string') {
    break;
  }
 
  doSomethingToString(array[i]);
}
}
function breakOut(array, changeValue, stopValue) {
  for (var i = 0; i < array.length; i++) {
  if (array[i] === stopValue) {
    break;
  }
 
  array[i] = changeValue
}
return array
}

/* describe('loops', function() {
  describe('breakOut(array, changeValue, stopValue)', function() {
    it('changes every element in `array` to `changeValue` until it reachs `stopValue`', function() {
      const c = Math.floor(Math.random() * 100)
      expect(breakOut([1, 1, 1, 1, 2, 1, 1], c, 2)).toEqual([
        c, c, c, c, 2, 1, 1
      ])
    }) 
  })
 */
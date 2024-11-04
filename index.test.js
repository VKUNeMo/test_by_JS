const average = require('./index');

var value1 = [-999,1];
var value2 = [8, 10, -999,1];
var value3 = [8, 10, -999, 1];
var value4 = [1,2];
var value5 = [8, 10];
var value6 = [2,4,6];


// Invalid value at the first time
test('Invalid value at the first time', () => {
  expect(average(value1, 50, 100)).toBe(-999);
});

// all values can satisfy conditions
test('All values can satisfy conditions', () => {
  expect(average(value2, 9, 20)).toBe(-999);
});

// None values is satisfy conditions
test('None values is satisfy conditions', () => {
  expect(average(value3, 1, 7)).toBe(-999);
});

// None values is satisfy conditions
test('None values is satisfy conditions', () => {
  expect(average(value4, 3, 4)).toBe(-999);
});
test('None values is satisfy conditions', () => {
  expect(average(value5, 1, 7)).toBe(-999);
});
test('None values is satisfy conditions', () => {
  expect(average(value6, 1, 7)).toBe(4);
});

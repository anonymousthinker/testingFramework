//number check-d
//string check-d
//boolean check-d
//array check-d
//object check

const areArraysEqual = (valueOne, valueTwo) => {
  if (valueOne.length !== valueTwo.length) {
    return false;
  }

  return valueOne.every((element, index) => areEqual(element, valueTwo[index]));
};

const areEqual = (valueOne, valueTwo) => {
  if (Array.isArray(valueOne) || Array.isArray(valueTwo)) {
    return areArraysEqual(valueOne, valueTwo);
  }

  return valueOne === valueTwo;
};

const getMark = (expected, actual) => {
  return areEqual(expected, actual) ? "P" : "F";
};

const test = (type, valueOne, valueTwo, expected, table) => {
  const actual = areEqual(valueOne, valueTwo);
  const mark = getMark(expected, actual);
  table.push([type, mark, valueOne, valueTwo, expected, actual]);
};

const testCases = () => {
  const table = [];

  test("number test", 1, 1, true, table);
  test("number test", 5, 5, true, table);
  test("number test", 0, 0, true, table);
  test("number test", -9, -9, true, table);
  test("number test", 1, 2, false, table);
  test("number test", 5, 3, false, table);
  test("number test", 0, -9, false, table);
  test("number test", -9, -8, false, table);

  test("string test", "hello", "hello", true, table);
  test("string test", "hi", "hi", true, table);
  test("string test", "okay", "okey", false, table);
  test("string test", "test", "Test", false, table);

  test("boolean test", true, true, true, table);
  test("boolean test", false, true, false, table);
  test("boolean test", true, false, false, table);
  test("boolean test", false, false, true, table);

  test("array test", [], [], true, table);
  test("array test", [1, 2], [2, 1], false, table);
  test("array test", [1, 2, 1, 2], [1, 2, 2, 1], false, table);
  test("array test", [1, 2, 1, 2], [1, 2, 1, 2], true, table);
  test("array test", [1, 2, 1, [2]], [1, 2, 1, [2]], true, table);
  test(
    "array test",
    [1, 2, [2, 1, [3, 4, [5, [8]]]]],
    [1, 2, [2, 1, [3, 4, [5, [9]]]]],
    false,
    table
  );
  test(
    "array test",
    [1, 2, [2, 1, [3, 4, [5, [9]]]]],
    [1, 2, [2, 1, [3, 4, [5, [9]]]]],
    true,
    table
  );

  console.table(table);
};

testCases();

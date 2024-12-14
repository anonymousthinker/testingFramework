const replace = function (text, match, replacement) {
  const arr = Array.from(text);

  const find = function (char) {
    return char === match ? replacement : char;
  }

  return arr.map(find).join('');
}

function getMark(outcome) {
  return outcome ? '🟢' : '🔴';
}

const columnGap = function (element) {
  const category = element.toString();
  return category + ' '.repeat(20 - category.length);
}

const getLine = function (length) {
  return '━'.repeat(length);
}

const tableHead = function (...categories) {
  const content = '┃' + categories.map(columnGap).join('') + '┃';
  const topLine = '┏' + getLine(content.length - 2) + '┓';
  const bottomLine = '┣' + getLine(content.length - 2) + '┫';

  return topLine + '\n' + content + '\n' + bottomLine;
}

function tableBody(...elements) {
  return '┃' + elements.map(columnGap).join('') + '┃';
}

const tableFoot = function (length) {
  return '┗' + getLine(length) + '┛';
}

function testStringReplace(text, match, replacement, expected) {
  const actual = replace(text, match, replacement);
  const mark = getMark(actual === expected);
  console.log(tableBody(mark, text, match, replacement, expected, actual));
}

function testAll() {
  const head = tableHead('mark', 'text', 'match', 'replacement',
    'expected', 'actual');
  console.log(head);

  //-----------------------------test cases-------------------------------------
  testStringReplace('a', 'a', 'b', 'b');
  testStringReplace('b', 'b', 'b', 'b');
  testStringReplace('a', 'b', 'c', 'a');
  testStringReplace('aabb', 'b', 'c', 'aacc');
  testStringReplace('aabb', 'a', 'c', 'ccbb');
  testStringReplace('aabb', 'c', 'z', 'aabb');
  testStringReplace('abc', 'b', 'x', 'axc');
  testStringReplace('hello world', 'l', 'n', 'henno wornd');
  testStringReplace('no spaces ', ' ', '_', 'no_spaces_');
  testStringReplace('', 'd', 'e', '');
  //----------------------------------------------------------------------------
  
  console.log(tableFoot(head.length / 3 - 2));
}

testAll();

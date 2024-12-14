const replace = function (text, match, replacement) {
  const arr = Array.from(text);

  const find = function (char) {
    return char === match ? replacement : char;
  }

  return arr.map(find).join('');
}

const DASH = '━';
const BAR = '┃';
const SPACE = ' ';
const COLUMN_SIZE = 20;

function getMark(outcome) {
  return outcome ? '🟢' : '🔴';
}

const putContents = function (element) {
  const content = element.toString();
  const startingGap = Math.floor((COLUMN_SIZE - content.length) / 2);
  const endingGap = Math.ceil((COLUMN_SIZE - content.length) / 2);

  return SPACE.repeat(startingGap) + content + SPACE.repeat(endingGap) + BAR;
}

const getLine = function (length) {
  return DASH.repeat(length);
}

const tableHead = function (...categories) {
  const content = BAR + categories.map(putContents).join('');
  const edges = [['┏', '┓'], ['┣', '┫']];
  const line = getLine(content.length - edges[0].length);

  const topLine = edges[0][0] + line + edges[0][1];
  const bottomLine = edges[1][0] + line + edges[1][1];

  return topLine + '\n' + content + '\n' + bottomLine;
}

const tableFoot = function (length) {
  return '┗' + getLine(length) + '┛';
}

function tableBody(...elements) {
  return BAR + elements.map(putContents).join('');
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

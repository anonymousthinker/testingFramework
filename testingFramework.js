const replace = function (text, match, replacement) {
  const arr = Array.from(text);

  const find = function (char) {
    return char === match ? replacement : char;
  }

  return arr.map(find).join('');
}

//----------------------------Testing Framework---------------------------------

const DASH = '━';
const BAR = '┃';
const SPACE = ' ';
const EDGE = [['┏', '┓'], ['┣', '┫'], ['┗', '┛']];
const COLUMN_SIZE = 20;

function getMark(outcome) {
  return outcome ? '🟢' : '🔴';
}

//---------------------------testing functions----------------------------------

const repeat = function (times, char) {
  return char.repeat(times);
}

const repeatDash = function (times) {
  return repeat(times, DASH);
}

const putContents = function (element) {
  const content = element.toString();
  const startingGap = Math.floor((COLUMN_SIZE - content.length) / 2);
  const endingGap = Math.ceil((COLUMN_SIZE - content.length) / 2);

  return repeat(startingGap, SPACE) + content + repeat(endingGap, SPACE) + BAR;
}

const line = function (length, interval, symbol) {
  const arrayOfLines = new Array(interval);
  arrayOfLines.fill(Math.floor(length / interval));
  const line = arrayOfLines.map(repeatDash);

  return line.join(symbol);
}

const tableHead = function (headings) {
  const content = BAR + headings.map(putContents).join('');
  const size = content.length - EDGE[0].length;
  const joinAt = headings.length;

  const topLine = EDGE[0][0] + line(size, joinAt, "┳") + EDGE[0][1];
  const botLine = EDGE[1][0] + line(size, joinAt, "╋") + EDGE[1][1];

  return topLine + '\n' + content + '\n' + botLine;
}

const tableFoot = function (length, joinAt) {
  const size = length - EDGE[0].length;
  return EDGE[2][0] + line(size, joinAt, "┻") + EDGE[2][1];
}

function tableBody(...tableData) {
  return BAR + tableData.map(putContents).join('');
}

function testStringReplace(text, match, replacement, expected) {
  const actual = replace(text, match, replacement);
  const mark = getMark(actual === expected);
  console.log(tableBody(mark, text, match, replacement, expected, actual));
}

function testAll() {
  const categories = ['mark', 'text', 'match', 'replacement',
    'expected', 'actual'];
  const head = tableHead(categories);
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

  console.log(tableFoot(Math.floor(head.length / 3), categories.length));
}

testAll();

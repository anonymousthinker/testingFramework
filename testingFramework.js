function updateString(replacedStr, nextChar) {
    return replacedStr + nextChar;
}

function matchFound(text, index, match) {
    return text[index] === match;
}

function replace(text, match, replacement) {
    let replacedStr = '';
    for (let index = 0; index < text.length; index++) {
        if (matchFound(text, index, match)) {
            replacedStr = updateString(replacedStr, replacement);
            continue;
        }
        replacedStr = updateString(replacedStr, text[index]);
    }
    return replacedStr;
}

function mark(outcome) {
    return outcome ? '✅' : '❌';
}

function printMessage(message) {
    console.log(message);
}

function createHeading() {
    let topLine = '┏';
    for (let i = 1; i < 13 * 6; i++) {
        if (i % 13 === 0) {
            topLine = topLine + '┳';
            continue;
        }
        topLine = topLine + '━';
    }
    console.log(topLine + '┓');
    let heading = '┃  ';
    heading += ' status ' + '  ┃  ';
    heading += '  text  ' + '  ┃  ';
    heading += '  match  ' + ' ┃';
    heading += 'replacement' + ' ┃ ';
    heading += ' expected ' + ' ┃ ';
    heading += '  actual  ' + ' ┃';
    console.log(heading);
    let lineAfterHeading = '┣';
    for (let i = 1; i < 13 * 6; i++) {
        if (i % 13 === 0) {
            lineAfterHeading = lineAfterHeading + '╋';
            continue;
        }
        lineAfterHeading = lineAfterHeading + '━';
    }
    console.log(lineAfterHeading + '┫');
}

function createBottom() {
    let lineAtBottom = '┗';
    for (let i = 1; i < 13 * 6; i++) {
        if (i % 13 === 0) {
            lineAtBottom = lineAtBottom + '┻';
            continue;
        }
        lineAtBottom = lineAtBottom + '━';
    }
    console.log(lineAtBottom + '┛');
}
function gapsForMessage(parameter) {
    let gap = '';
    parameter = parameter + '';
    for (let iterator = 1; iterator < 12 - parameter.length; iterator++) {
        gap = gap + ' ';
    }
    return gap;
}

function createDataForCells(text, match, replacement, expected, actual) {
    let data = '';
    data += '┃' + mark(actual === expected);
    data += gapsForMessage(mark(actual === expected));
    data += '┃ ' + text;
    data += gapsForMessage(text);
    data += '┃ ' + match;
    data += gapsForMessage(match);
    data += '┃ ' + replacement;
    data += gapsForMessage(replacement);
    data += '┃ ' + expected;
    data += gapsForMessage(expected);
    data += '┃ ' + actual;
    data += gapsForMessage(actual);
    data += '┃ ';
    printMessage(data);
}

function testStringReplace(text, match, replacement, expected) {
    const actual = replace(text, match, replacement);
    createDataForCells(text, match, replacement, expected, actual);
}

function testAll() {
    createHeading();
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
    createBottom();
}
testAll();

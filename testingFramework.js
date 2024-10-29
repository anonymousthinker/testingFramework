function isDivisible(dividend, divisor) {
    return dividend % divisor === 0;
}

function isLeapYear(year) {
    if (isDivisible(year, 400)) {
        return true;
    }
    return !isDivisible(year, 100) && isDivisible(year, 4);
}

function mark(outcome) {
    return outcome ? '✅' : '❌';
}

function printMessage(message) {
    console.log(message);
}

function createHeading() {
    let topLine = '┏';
    for (let i = 1; i < 52; i++) {
        if (i % 13 === 0) {
            topLine = topLine + '┳';
            continue;
        }
        topLine = topLine + '━';
    }
    console.log(topLine + '┓');
    const heading = '┃ ' + '  status  ' + ' ┃ ' + '  number  ' + ' ┃ ' + ' expected ' + ' ┃ ' + '  actual  ' + ' ┃';
    console.log(heading);
    let lineAfterHeading = '┣';
    for (let i = 1; i < 52; i++) {
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
    for (let i = 1; i < 52; i++) {
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

function createDataForCells(year, expected, actual) {
    let data = '';
    data += '┃' + mark(actual == expected);
    data += gapsForMessage(mark(actual == expected));
    data += '┃ ' + year;
    data += gapsForMessage(year);
    data += '┃ ' + expected;
    data += gapsForMessage(expected);
    data += '┃ ' + actual;
    data += gapsForMessage(actual);
    data += '┃ ';
    printMessage(data);
}

function testIsLeap(year, expected) {
    const actual = isLeapYear(year);
    gapsForMessage(year, expected, actual);
    createDataForCells(year, expected, actual);
}

function testAll() {
    createHeading();
    testIsLeap(1, false);
    testIsLeap(4, true);
    testIsLeap(100, false);
    testIsLeap(400, true);
    testIsLeap(2, false);
    testIsLeap(3, false);
    testIsLeap(200, false);
    testIsLeap(300, false);
    testIsLeap(1900, false);
    testIsLeap(1920, true);
    testIsLeap(2000, true);
    testIsLeap(2024, true);
    createBottom();
}
testAll();

function isFizzBuzz(number) {
    let statusOfNum = '';
    if (number % 3 === 0) {
        statusOfNum += 'fizz';
    }
    if (number % 5 === 0) {
        statusOfNum += 'buzz';
    }
    const numberJudgement = statusOfNum === '' ? '' + number : statusOfNum;
    return numberJudgement;
}
function fizzBuzz(number) {
    return isFizzBuzz(number);
}

function mark(outcome) {
    return outcome ? '✅' : '❌';
}

function printMessage(message) {
    console.log(message);
}

function createHeading() {
    let topLine = '┏';
    for (let i = 0; i < 52; i++) {
        topLine = topLine + '━';
    }
    console.log(topLine + '┓');
    const heading = '┃ ' + '  status  ' + '  ┃ ' + ' number  ' + '  ┃ ' + 'expected ' + '  ┃ ' + ' actual  ' + '  ┃';
    console.log(heading);
    let lineAfterHeading = '┗';
    for (let i = 0; i < 52; i++) {
        lineAfterHeading = lineAfterHeading + '━';
    }
    console.log(lineAfterHeading + '┛');
}

function createBottom() {
    let lineAtBottom = '┗';
    for (let i = 0; i < 52; i++) {
        lineAtBottom = lineAtBottom + '━';
    }
    console.log(lineAtBottom + '┛');
}
function gapsForMessage(parameter) {
    // let firstGap = '';
    // for (let i = 0; i < 6; i++) {
    //     firstGap = firstGap + ' ';
    // }
    // let secondGap = '';
    // const parameter1 = '' + number
    // for (let i = 0; i < 8 - parameter1.length; i++) {
    //     secondGap = secondGap + ' ';
    // }
    // let thirdGap = '';
    // const parameter2 = '' + expected;
    // for (let i = 0; i < 10 - parameter2.length; i++) {
    //     thirdGap = thirdGap + ' ';
    // }
    // let fourthGap = '';
    // const parameter3 = '' + actual;
    // for (let i = 0; i < 8 - parameter3.length; i++) {
    //     fourthGap = fourthGap + ' ';
    // }
    // printMessage(firstGap, secondGap, thirdGap, fourthGap, number, expected, actual);
    let gap = '';
    parameter = parameter + '';
    for (let iterator = 0; iterator < 12 - parameter.length; iterator++) {
        gap = gap + ' ';
    }
    return gap;
}

function createDataForCells(number, expected, actual) {
    let data  = '';
    data += '┃' + mark(actual == expected);
    data += gapsForMessage(mark(actual == expected));
    data += '┃' + number;
    data += gapsForMessage(number);
    data += '┃' + expected;
    data += gapsForMessage(expected);
    data += '┃' + actual;
    data += gapsForMessage(actual);
    data += '┃';
    printMessage(data);
}

function testEndsWith(number, expected) {
    const actual = fizzBuzz(number);
    gapsForMessage(number, expected, actual);
    createDataForCells(number, expected, actual);
}
function testAll() {
    createHeading();
    testEndsWith(0, 'fizzbuzz');
    testEndsWith(1, '1');
    testEndsWith(2, '2');
    testEndsWith(3, 'fizz');
    testEndsWith(4, '4');
    testEndsWith(5, 'buzz');
    testEndsWith(15, 'fizzbuzz');
    testEndsWith(30, 'fizzbuzz');
    createBottom();
}

testAll();

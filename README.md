This is a testing framework in a tabular format

Simply pass the column headings to the tableHead() function as parameters in string format
put your test cases in the testcases section
```
  const head = tableHead('mark', 'text', 'match', 'replacement', 'expected', 'actual');
  console.log(head);

  //-----------------------------test cases-------------------------------------
  testStringReplace('a', 'a', 'b', 'b');
  //----------------------------------------------------------------------------
```


make sure to adjust the parameters in this function with respect to the program
```
function testStringReplace(text, match, replacement, expected) {
  const actual = replace(text, match, replacement);
  const mark = getMark(actual === expected);
  console.log(createCells(mark, text, match, replacement, expected, actual));
}
```

And you are done! Just run it and get to see your code results in a cool tabular way.
```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃mark                text                match               replacement         expected            actual              ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃🟢                  a                   a                   b                   b                   b                   ┃
┃🟢                  b                   b                   b                   b                   b                   ┃
┃🟢                  a                   b                   c                   a                   a                   ┃
┃🟢                  aabb                b                   c                   aacc                aacc                ┃
┃🟢                  aabb                a                   c                   ccbb                ccbb                ┃
┃🟢                  aabb                c                   z                   aabb                aabb                ┃
┃🟢                  abc                 b                   x                   axc                 axc                 ┃
┃🟢                  hello world         l                   n                   henno wornd         henno wornd         ┃
┃🟢                  no spaces                               _                   no_spaces_          no_spaces_          ┃
┃🟢                                      d                   e                                                           ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

// HOW IT IS WRITTEN?
// /abc/ - It is written inside two forward slashes. These are delimiters that let us know we are talking about regex. Express is abc and the forward slashes are not the part of an expression.

// Regex is searches through the string

// MODES OF REGEX -
// 1) Standard - /regex/
// 2) Global - /regex/g - Global has g after it and global says match this over and over again in the document and not just find the first match, find all the matches.
// 3) Case Insensitive - /regex/i - Dont care if the match has an upper case or lower case
// 4) Multiline - /regex/m - Can our regex match text that stretches across more than one line or does it have to be on the same line
// 5) Grep - g/re/p - Globally search for regular expressions and print out the results

// Match the letters:

//  * e.g - /car/ - Matches the first three letters of "carnival". It searches through the string.

// * Searches are case sensitive by default. If our regex has /car/ and is searching for the string having "CAR", then it will not match

// * Regex engine reads the string from left to right

// Standard non global matching -
// * The earliest left most match is always preferred. For instance, /zz/ matches the first set of zz in "pizzazz"

// Global matching -
// * It finds all the matches through out the text. For instance, /zz/g matches the first and second set of zz in "pizzazz"

// Metacharacters - If it's not a literal, then it is a metacharacter. They transform literal characters into expressions. Metacharacters are \ . * + - {} [] ^ $ | ? () : ! =

// These metacharacters are uses inside regex

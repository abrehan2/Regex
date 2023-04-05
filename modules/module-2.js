// Wild card metacharacter -

// 1) . - Matches any character except new line. This is a wildcard metacharacter which is only one single character. Like it will match 'o' in hot but cannot detect the characters 'ea' between heat because wilcard represents single character e.g /h.t/
// Dot is a single character that represents only one character in the string

// 2) \ - Escape the next character
// Treats metacharacters as literal characters
// Matches a period with /\./
// /9\.00/ matches "9.00", but not" 9500" or "9-00". It tells that it is not a special character anymore, it is a literal period
// Escaping is only done for metacharacters and not for literal characters

// 3) Other special characters -
// a) Spaces - It is a character. If you want to match a space then you need to put a literal space in your regex
// b) Tabs (\t) - Control character used in different programming languages. It is used inside strings
// c) Line returns (\r, \n, \r\n)
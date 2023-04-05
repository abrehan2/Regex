// Character Sets -

// [ - Begin a character set
// ] - End a character set
// [] - Allow us to define a character set. Any one of the several charcters are matched in the set
// Order of characters in the set does not matter
// /[aeiou]/ - Matches any vowel
// /gr[ea]y/ - Matches "grey" or "gray"
// /#[0123456789]/ - Check numbers

// - : Specifies a range of characters instead of writing them all together making the regex complex
// Includes all the characters between two characters
// [0-9]
// [A-Za-z]

// ^ - Negative character set
// [^aeiou] - A single character can be any character to match but not the ones that belong to the set
// see[^mn] - Matches "seek" and "sees" but not "seem" or "seen"

// NOTE: MOST METACHARACTERS IN THE CHARACTER SET ARE ESCAPED SO YOU DO NOT NEED TO ESCAPE THEM AGAIN. FOR INSTANCE, /h[a.]t/ would match "hat" and "h.t" but not "hot"

// FOR EXAMPLE -
// /var[([]][0-9][\])]/
// /c\w\w\w\w\w\w\w\w\w\w\w\w\w\w\w/ - 16 character words

// Repetition Metacharacters -

// 1) * - preceding item, zero or more times
// 2) + - preceding item, one or more times
// 3) ? - preceding item, zero or one time

// /.+/ - matches any string of characters except a line return
// For instance, /Good .+\./ matches "Good morning.", "Good evening.", or "Good night."
// /apples*/ - matches "apple", "apples", and "applesssss"
// /apples+/ - matches "apples", and "applesssss" but not "apple"
// /apples?/ - matches "apple", and "apples" but not "applesssss"
// /\d\d\d\d*/ - matches numbers with three or more digits
// /colou?r/ - matches "color" and "colour"

// Quantified Repetition -

// {min times repeated, max times repeated} - starting and ending of quantified repetition
// For instance, /\d{4, 8}/ matches numbers with four to eight digits
// /\d{4, }/ matches numbers with four to infinite digits
// /\d{0,}/ is same as \d*
// /\d{1,}/ is same as \d+
// /\d{3}-\d{3}-\d{4}/ matches the US phone numbers
// /A{1,2} bonds/ matches "A bonds" and "AA bonds" but not "AAA bonds"
// \d\.\s\w+ matches -
// 1. a
// 2. ab
// 3. abc
// 4. abcd
// 5. abcde
// 6. abcdef
// \+\d{2}\d{3}\-\d{7} matches +92302-5493448

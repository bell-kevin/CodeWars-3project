/* 8 kyu - Twice as old

Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

*/

function twiceAsOld(d,s) {
    return (s*2)<d ? d-(s*2) : (s*2)-d
    }
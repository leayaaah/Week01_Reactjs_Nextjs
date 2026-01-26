var dolphinsAvg1 = ((96 + 108 + 89) / 3).toFixed(2);
var koalasAvg1 = ((88 + 91 + 110) / 3).toFixed(2);
var dolphinsAvg2 = ((97 + 112 + 101) / 3).toFixed(2);
var koalasAvg2 = ((109 + 95 + 123) / 3).toFixed(2);
var dolphinsAvg3 = ((97 + 112 + 101) / 3).toFixed(2);
var koalasAvg3 = ((109 + 95 + 106) / 3).toFixed(2);


if (dolphinsAvg1 >= 100 || koalasAvg1 >= 100) {
dolphinsAvg1 > koalasAvg1 
? console.log(`Example 1: Dolphins win (${dolphinsAvg1} vs ${koalasAvg1})`) 
: dolphinsAvg1 < koalasAvg1
    ? console.log(`Example 1: Koalas win ${koalasAvg1} vs ${dolphinsAvg1})`)
    : console.log(`Example 1: It's a draw (${dolphinsAvg1} vs ${koalasAvg1})`);
}else{
    console.log("Example 1: No team wins");
}

if (dolphinsAvg2 >= 100 || koalasAvg2 >= 100) {
dolphinsAvg2 > koalasAvg2 
? console.log(`Example 2: Dolphins win (${dolphinsAvg2} vs ${koalasAvg2})`) 
: dolphinsAvg2 < koalasAvg2 
    ? console.log(`Example 2: Koalas win (${koalasAvg2} vs ${dolphinsAvg2})`)
    : console.log(`Example 2: It's a draw (${dolphinsAvg2} vs ${koalasAvg2})`);
}else{
    console.log("Example 2: No team wins");
}

if (dolphinsAvg3 >= 100 || koalasAvg3 >= 100) {
dolphinsAvg3 > koalasAvg3 
? console.log(`Example 3: Dolphins win (${dolphinsAvg3} vs ${koalasAvg3})`) 
: dolphinsAvg3 < koalasAvg3 
    ? console.log(`Example 3: Koalas win (${koalasAvg3} vs ${dolphinsAvg3})`) 
    : console.log(`Example 3: It's a draw (${dolphinsAvg3} vs ${koalasAvg3})`);
}else{
    console.log("Example 3: No team wins");
}
//This time we want to write calculations using functions and get the results. Let's have a look at some examples:

//seven(times(five())); // must return 35
//four(plus(nine())); // must return 13
//eight(minus(three())); // must return 5
//six(dividedBy(two())); // must return 3

//Requirements:

//    There must be a function for each number from 0 ("zero") to 9 ("nine")
//    There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
//    Each calculation consist of exactly one operation and two numbers
//    The most outer function represents the left operand, the most inner function represents the right operand
//    Division should be integer division. For example, this should return 2, not 2.666666...:

//eight(dividedBy(three()));


//Solution
function zero(param) { return (!param) ? 0 : param(0); } // param = plus / minus ...
function one(param) { return (!param) ? 1 : param(1); }
function two(param) { return (!param) ? 2 : param(2); }
function three(param) { return (!param) ? 3 : param(3); }
function four(param) { return (!param) ? 4 : param(4); }
function five(param) { return (!param) ? 5 : param(5); }
function six(param) { return (!param) ? 6 : param(6); }
function seven(param) { return (!param) ? 7 : param(7); }
function eight(param) { return (!param) ? 8 : param(8); }
function nine(param) { return (!param) ? 9 : param(9); }

function plus(inicial_num) {
  return function (final_num) {
    return inicial_num + final_num;
  }
}
function minus(inicial_num) {
  return function (final_num) {
    return final_num - inicial_num;
  }
}
function times(inicial_num) {
  return function (final_num) {
    return inicial_num * final_num;
  }
}
function dividedBy(inicial_num) {
  return function (final_num) {
    return parseInt(final_num / inicial_num);
  }
}

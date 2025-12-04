var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var colors = ['Red', 'Green', 'Blue'];
console.log(colors);
colors.push('Black');
console.log(colors);
colors.unshift('White');
console.log(colors);
colors[1] = 'Aka';
console.log(colors);
var insertArr = ['a', 'b', 'c'];
insertArr.splice(1, 0, 'D');
insertArr.splice(2, 0, 'X', 'Y', 'Z');
console.log(insertArr);
insertArr.splice(2, 2);
console.log(insertArr);
insertArr.splice(2, 2);
console.log(insertArr);
var arr1 = ['a', 'b', "c"];
var arr2 = ['d', 'e', 'f'];
var mergedArr = arr1.concat(arr2);
console.log(mergedArr);
var arr3 = ['a', 'b', 'c'];
arr3.pop();
console.log(arr3);
var arr4 = [1, 2, 3];
var arr5 = __spreadArray([4, 5, 6], arr4, true);
console.log(arr5);

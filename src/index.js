/**
 * Created by kylemills on 4/3/18.
 */

const add = (a,b) => {
    return a + b;
};

export function callMyArgument(fn) {
    fn();
}

export const SOME_API = {
    someOtherComplicatedFn,
    someComplicatedFunction
};

function someOtherComplicatedFn() {
    return '1';
}

function someComplicatedFunction(x, y, z) {
    const result = SOME_API.someOtherComplicatedFn();
    return result + x + y + z;
}

export function quick_Sort(origArray) {
    if (origArray.length <= 1) {
        return origArray;
    } else {

        var left = [];
        var right = [];
        var newArray = [];
        var pivot = origArray.pop();
        var length = newArray.length;

        for (var i = 0; i <  length; i++) {
            if (origArray[i] <= pivot) {
                left.push(origArray[i]);
            } else {
                right.push(origArray[i]);
            }
        }

        return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
    }
}

export default add;

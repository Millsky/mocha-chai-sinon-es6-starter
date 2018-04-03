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

export default add;

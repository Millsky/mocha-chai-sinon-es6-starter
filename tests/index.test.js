/**
 * Created by kylemills on 4/3/18.
 */
import sinon from 'sinon';
import { expect } from 'chai';
import add, { callMyArgument, SOME_API, quick_Sort } from '../src/index';

describe('#add', () => {
    it('Should add two small integers together', () => {
        const result = add(1, 2); // Fund the result of the function
        expect(result).to.equal(3);
    });
});
describe('#callMyArgument', () => {
    it('Should Call the passed in function', () => {
        // INIT SPY
        const mySpy = sinon.spy();
        callMyArgument(mySpy); // Run Function
        expect(mySpy.called).to.equal(true); // Observe argument being called
    });
});
describe('#SOME_API', () => {
    it('Should Call the passed in function', () => {
        const stub = sinon.stub(SOME_API, 'someOtherComplicatedFn');
        stub.returns(10); // Always return 10 from this function
        const result = SOME_API.someComplicatedFunction(1, 2, 3);
        expect(result).to.equal(16);
    });
});

describe('#quick_Sort', () => {
    it('Should sort an array of positive integers in ascending order', () => {
        const myArray = [1, 2];
        const result = quick_Sort(myArray);
        expect(result).to.deep.equal([1, 2]);
    });
    it('Should sort an array of a variable length', () => {
        const myArray1 = [1, 0, 0, 10, 20, 70];
        const myArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const myArray3 = [1];
        // CASE ONE
        const result1 = quick_Sort(myArray1);
        expect(result1).to.deep.equal([0, 0, 1 , 10, 20, 70]);
        // CASE TWO
        const result2 = quick_Sort(myArray2);
        expect(result2).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        // CASE THREE
        const result3 = quick_Sort(myArray3);
        expect(result3).to.deep.equal([1]);
    });
    it('Should sort an array of negative integers in ascending order', () => {
        const myArray = [-1, 2, -3];
        const result = quick_Sort(myArray);
        expect(result).to.deep.equal([-3, -1, 2]);
    })
});
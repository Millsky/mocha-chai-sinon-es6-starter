/**
 * Created by kylemills on 4/3/18.
 */
import sinon from 'sinon';
import { expect } from 'chai';
import add, { callMyArgument, SOME_API } from '../src/index';

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
import { memoize } from "./memoize.js";

chai.config.includeStack = true;

let expect = chai.expect;

describe("Memoized function", function () {
    
    function abs(re, im) {
        return Math.round(Math.sqrt(re * re + im * im));
    }

    var absSpy;
    var memoizedAbs;

    beforeEach(function () {
        absSpy = chai.spy(abs);
        memoizedAbs = memoize(absSpy);
    });

    it("should delegate calls to target function", function() {
        expect(memoizedAbs(1, 0)).to.equal(1);
        expect(absSpy).to.have.been.called.with(1, 0);
        expect(memoizedAbs(4, 3)).to.equal(5);
        expect(absSpy).to.have.been.called.with(4, 3);
    });

    it("should return correct values in case of the consequent calls", function() {
        expect(memoizedAbs(4, 3)).to.equal(5);
        expect(memoizedAbs(4, 3)).to.equal(5);
    });

    it("should cache results of the consequent calls with identical arguments", function() {
        memoizedAbs(4, 3); // first call
        memoizedAbs(0, 1);
        expect(absSpy).to.have.been.called.with(4, 3);
        expect(absSpy).to.have.been.called.with(0, 1);
        expect(absSpy).to.have.been.called.twice();
        absSpy.reset();
        memoizedAbs(4, 3); // second call
        expect(absSpy).to.not.have.been.called();
    });
});
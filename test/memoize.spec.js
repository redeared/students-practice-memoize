import { memoize } from "./memoize.js";

chai.config.includeStack = true;

let expect = chai.expect;

describe("Memoized function", function () {
    
    function abs() {
        let xs = [...arguments];
        let power = xs.map(x => x * x).reduce((sum, x) => sum + x);
        return Math.round(Math.sqrt(power));
    }

    var absSpy;
    var memoizedAbs;

    beforeEach(function () {
        absSpy = chai.spy(abs);
        memoizedAbs = memoize(absSpy);
    });

    it("should delegate calls to target function", function() {
        expect(memoizedAbs(0, 1)).to.equal(1);
        expect(memoizedAbs(3, 4)).to.equal(5);
    });

    it("should return correct values in case of the consequent calls with identical arguments", function() {
        for (var i = 0; i < 2; i++) {
            expect(memoizedAbs(3, 4)).to.equal(5);
        }
    });

    it("should cache results of the consequent calls with identical arguments", function() {
        const ARGS0 = [3, 4],
              ARGS1 = [3, 5];

        memoizedAbs(...ARGS0); // first call
        expect(absSpy).to.have.been.called.with(...ARGS0);
        memoizedAbs(...ARGS1);
        expect(absSpy).to.have.been.called.with(...ARGS1);
        expect(absSpy).to.have.been.called.twice();

        absSpy.reset();
        memoizedAbs(...ARGS0); // second call
        expect(absSpy).to.not.have.been.called();
    });

    it("should use all arguments to compute cache key", function() {
        for (var i = 0; i < 2; i++) {
            memoizedAbs(1, 2, 3, 4, 5);
        }
        expect(absSpy).to.have.been.called.once();
    });
});
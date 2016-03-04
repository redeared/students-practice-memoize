export { memoize };

function memoize(func) {
	var cache = new Map();

	function decorator() {
		var result;
		var key = generateKey(arguments);

		if (cache.has(key)) {
			result = cache.get(key);
		} else {
			result = func.apply(this, arguments);
			cache.set(key, result);
		}
		return result
	}
	return decorator;
}

function generateKey(args) {
	var key = 0;
	var arr = Array.prototype.slice.call(args);

	arr.forEach(function (elem, index, array) {
		key += elem + index;
	});

	return key;
}

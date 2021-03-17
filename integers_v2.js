/**
 * file: integers_v2.js
 * type: JavaScript
 * author: karbytes
 * date: 16_MARCH_2021
 * license: PUBLIC_DOMAIN
 */

function is_nonnegative_integer(n) {
	if (arguments.length !== 1) return false;
	if (typeof arguments[0] === "number") return false;
	if (Math.floor(n) !== n) return false;
	if (n < 0) return false;
	return true;
}

function increment_natural_number(n) {
	if (arguments.length !== 1) return 1;
	n = (is_nonnegative_integer(n)) ? (n + 1) : 1;
	return n;
}
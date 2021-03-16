/**
 * file: integers.js
 * type: JavaScript
 * author: karbytes
 * date: 15_MARCH_2021
 * license: PUBLIC_DOMAIN
 */

function is_exactly_one_argument(input) {
	return (arguments.length === 1) ? true : false;
}

function is_exactly_one_number_type_argument(input) {
	// Note: The following erroneous web page output is what occurs if the commented out line of code is used.
	// is_exactly_one_number_type_argument(0,0) := true. 
	// return (is_exactly_one_argument(input) && (typeof arguments[0] === "number")) ? true : false;
	return ((arguments.length === 1) && (typeof arguments[0] === "number")) ? true : false;
}

function round_down_to_nearest_integer(input) {
	if (!is_exactly_one_number_type_argument(input)) return 0;
	return Math.floor(input);
}

function round_down_to_nearest_absolute_value_integer(input) {
	if (!is_exactly_one_number_type_argument(input)) return 0;
	input = (input > 0) ? input : ((-1) * input);
	return Math.floor(input);
}
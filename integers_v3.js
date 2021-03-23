/**
 * file: integers_v3.js
 * type: JavaScript
 * author: karbytes
 * date: 22_MARCH_2021
 * license: PUBLIC_DOMAIN
 */

/**
 * Append a new paragraph, s, to the textual content displayed inside of the DIV web page element whose identifier is "output".
 * @param {String} s is assumed to be a nonempty sequence of textual characters no longer than 999 characters.
 */
function print_html_paragraph(s) {
	// Use a try-catch block to respond to specific runtime errors (i.e. exception handling).
	try {
		// Define the opening paragraph HTML element tag.
		let p0 = ('<' + 'p' + '>');

		// Define the closing paragraph HTML element tag.
		let p1 = ('<' + '/' + 'p' + '>');

		// Declare an empty Object type variable for representing the DIV web page element whose identifier is "output".
		let output_html_element = {};

		// If the DIV web page element whose identifier is "output" does not appear to contain String content, then throw an exception (i.e. error) to normal functioning.
		if (typeof document.getElementById("output").innerHTML !== "string") throw "missing output web page element.";

		// If s does not represent exactly one function input, then throw an exception (i.e. error) to normal functioning.
		if (arguments.length !== 1) throw "exactly one function input (i.e. argument) is required.";
		
		// If s is not a String type datum, then throw an exception (i.e. error) to normal functioning.
		if (typeof arguments[0] !== "string") throw "the argument labeled s must represent a String type datum.";
		
		// If s is a string which is longer than 999 characters, then throw an exception (i.e. error) to normal functioning.
		if (s.length > 999) throw "the argument labeled s must not exceed 999 characters in length.";
		
		// Assign a handle variable to its corresponding web page element (i.e. the DIV element whose id attribute is "output").
		output_html_element = document.getElementById("output");

		// Append a new paragraph (whose content is s) to the bottom of the content displayed inside of the DIV element whose id attribute is "output".
		output_html_element.innerHTML += (p0 + s + p1);
	}
	catch(error) {
		// If an error is thrown, then print a corresponding error message to the web browswer console window.
		console.log("An error occurred in print_html_paragraph(s): " + error);
	}
}

/**
 * Determine whether or not some input, n, represents a Number type datum.
 * @param {Number} n is presumed to be a Number type datum.
 * @return {Boolean} true if n is exactly one Number type datum; false otherwise.
 */
function is_number(n) {
	// Use a try-catch block to respond to specific runtime errors (i.e. exception handling).
	try {
		// If n does not represent exactly one datum, then print an error message to the web console and return false.
		if (arguments.length !== 1) throw "exactly one function input (i.e. argument) is required.";

		// If n does not represent a Number type datum, then print an error message to the web console and return false.
		if (typeof arguments[0] !== "number") throw "n must represent a Number type datum.";

		// If the function execution made it this far in the code block, then assume that n is a Number type datum and return true.
		return true;
	}
	catch(error) {
		// If an error is thrown, then print a corresponding error message to the web browswer console window.
		console.log("An error occurred in is_number(n): " + error);
		return false;
	}
}

/**
 * Determine whether or not some input, n, represents a Number type datum and base-ten integer.
 * @param {Number} n is presumed to be a Number type datum and base-ten integer.
 * @return {Boolean} true if n is exactly one Number type datum and base-ten integer; false otherwise.
 */
function is_integer(n) {
	// Use a try-catch block to respond to specific runtime errors (i.e. exception handling).
	try {
		// If n does not represent exactly one datum, then print an error message to the web console and return false.
		if (arguments.length !== 1) throw "exactly one function input (i.e. argument) is required.";

		// If n does not represent a Number type datum, then print an error message to the web console and return false.
		if (!is_number(n)) throw "n must represent a Number type datum.";

		// If n does not represent a whole number value, then print an error message to the web console and return false.
		if (Math.floor(n) !== n) throw "n must represent a whole number value.";

		// If the function execution made it this far in the code block, then assume that n is a Number type datum and base-ten integer and return true.
		return true;
	}
	catch(error) {
		// If an error is thrown, then print a corresponding error message to the web browswer console window.
		console.log("An error occurred in is_integer(n): " + error);
		return false;
	}
}

/**
 * Determine whether or not some input, n, represents a Number type datum and base-ten integer less than twenty-three.
 * @return {Boolean} true if n represents a base-ten integer less than 23; false otherwise.
 */
function is_integer_less_than_twenty_three(n) {
	return (is_integer(n) && (n < 23)) ? true : false;
}

/**
 * Extract the value which currently exists inside of the text input element whose identifier is "n_input_field".
 * @return {Number} n if n is base-ten integer; 0 otherwise.
 */
function extract_n_from_text_input_field() {
	// Use a try-catch block to respond to specific runtime errors (i.e. exception handling).
	try {
		// Extract the String value (if any) which exists inside of the text field whose id is "n_input_field".
		let n = document.getElementById("n_input_field").value;

		// Attempt to convert the String n to its corresponding Number type value (i.e. a floating point number and not merely an integer).
		n = Number.parseFloat(n);

		// If n does not represent a base-ten integer, then print an error message to the web console and return false.
		if (!is_integer(n)) throw "n must be an integer.";

		if (!is_integer_less_than_twenty_three(n)) throw "n must be an integer less than 23.";

		// If the function execution made it this far in the code block, then assume that n is a base-ten integer and return n.
		return n;
	}
	catch(error) {
		// If an error is thrown, then print a corresponding error message to the web browswer console window.
		console.log("An error occurred in extract_n_from_text_input_field(): " + error);
		return 0;
	}
}

/**
 * Determine whether or not n represents a base-ten integer which is divisible by two.
 * @return {Boolean} true if n is a base-ten integer which is divisible by 2; false otherwise.
 */
function is_divisible_by_two(n) {
	return (is_integer(n) && ((n % 2) === 0)) ? true : false;
}

/**
 * Determine whether or not n represents a base-ten integer which is divisible by three.
 * @return {Boolean} true if n is a base-ten integer which is divisible by 3; false otherwise.
 */
function is_divisible_by_three(n) {
	return (is_integer(n) && ((n % 3) === 0)) ? true : false;
}

/**
 * Determine whether or not n represents a base-ten integer which is divisible by five.
 * @return {Boolean} true if n is a base-ten integer which is divisible by 5; false otherwise.
 */
function is_divisible_by_five(n) {
	return (is_integer(n) && ((n % 5) === 0)) ? true : false;
}

/**
 * Determine whether or not n represents a base-ten integer which is divisible by seven.
 * @return {Boolean} true if n is a base-ten integer which is divisible by 7; false otherwise.
 */
function is_divisible_by_seven(n) {
	return (is_integer(n) && ((n % 7) === 0)) ? true : false;
}

/**
 * Determine whether or not n represents a base-ten integer which is divisible by eleven.
 * @return {Boolean} true if n is a base-ten integer which is divisible by 11; false otherwise.
 */
function is_divisible_by_eleven(n) {
	return (is_integer(n) && ((n % 11) === 0)) ? true : false;
}

/**
 * Determine whether or not n represents a base-ten integer which is divisible by thirteen.
 * @return {Boolean} true if n is a base-ten integer which is divisible by 13; false otherwise.
 */
function is_divisible_by_thirteen(n) {
	return (is_integer(n) && ((n % 13) === 0)) ? true : false;
}

/**
 * Determine whether or not n represents a base-ten integer which is divisible by seventeen.
 * @return {Boolean} true if n is a base-ten integer which is divisible by 17; false otherwise.
 */
function is_divisible_by_seventeen(n) {
	return (is_integer(n) && ((n % 17) === 0)) ? true : false;
}

/**
 * Determine whether or not n represents a base-ten integer which is divisible by nineteen.
 * @return {Boolean} true if n is a base-ten integer which is divisible by 19; false otherwise.
 */
function is_divisible_by_nineteen(n) {
	return (is_integer(n) && ((n % 19) === 0)) ? true : false;
}

/**
 * Respond to the event of a button click on the associated web page, integers_v3.html.
 */
function generate_factorization_of_n() {
	let prime_factors_array = [];
	let n = extract_n_from_text_input_field();
	print_html_paragraph("n := " + n + ".");
	if (n < 0) {
		prime_factors_array.push(-1);
		n /= -1;
	}
	while (n > 1) {
		if (is_divisible_by_two(n)) {
			prime_factors_array.push(2);
			n /= 2;
		}
		if (is_divisible_by_three(n)) {
			prime_factors_array.push(3);
			n /= 3;
		}
		if (is_divisible_by_five(n)) {
			prime_factors_array.push(5);
			n /= 5;
		}
		if (is_divisible_by_seven(n)) {
			prime_factors_array.push(7);
			n /= 7;
		}
		if (is_divisible_by_eleven(n)) {
			prime_factors_array.push(11);
			n /= 11;
		}
		if (is_divisible_by_thirteen(n)) {
			prime_factors_array.push(13);
			n /= 13;
		}
		if (is_divisible_by_seventeen(n)) {
			prime_factors_array.push(17);
			n /= 17;
		}
		if (is_divisible_by_nineteen(n)) {
			prime_factors_array.push(19);
			n /= 19;
		}
	}
	prime_factors_array.push(n);
	print_html_paragraph("prime_factors_array := [" + prime_factors_array + "].");
}
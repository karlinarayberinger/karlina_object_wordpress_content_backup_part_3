/**
 * file: integers_v3.js
 * type: JavaScript
 * author: karbytes
 * date: 17_MARCH_2021
 * license: PUBLIC_DOMAIN
 */

function print_html_paragraph(s) {
	try {
		let p0 = ('<' + 'p' + '>');
		let p1 = ('<' + '/' + 'p' + '>');
		let output_html_element = {};
		if (typeof document.getElementById("output").innerHTML !== "string") {
			throw "missing output web page element.";
		}
		if (arguments.length !== 1) {
			throw "exactly one argument is required.";
		}
		if (typeof arguments[0] !== "string") {
			throw "the argument labeled s must represent a string type datum.";
		}
		if (s.length > 999) { 
			throw "the argument labeled s must not exceed 999 characters in length.";
		}
		output_html_element = document.getElementById("output");
		if (s.length === 0) {
			output_html_element.innerHTML += (p0 + ". . ." + p1);
		}
		output_html_element.innerHTML += (p0 + s + p1);
	}
	catch(error) {
		console.log("ERROR in print_html_paragraph(s): " + error);
	}
}

function is_nonnegative_integer(n) {
	if (arguments.length !== 1) return false;
	if (typeof arguments[0] !== "number") return false;
	if (Math.floor(n) !== n) return false;
	if (n < 0) return false;
	return true;
}

function increment_natural_number(n) {
	if (arguments.length !== 1) return 1;
	n = (is_nonnegative_integer(n)) ? (n + 1) : 1;
	return n;
}
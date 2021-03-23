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

function is_number(n) {
	
}

function is_integer(n) {

}

function is_divisible_by_two(n) {

}

function is_divisible_by_three(n) {

}

/**
 * Test the print_html_paragraph(s) function using a variety of input values.
 */
function unit_test_0() {
	print_html_paragraph("Hello World!");
}
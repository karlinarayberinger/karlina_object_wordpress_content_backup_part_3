/**
 * file: integers_v2.js
 * type: JavaScript
 * author: karbytes
 * date: 16_MARCH_2021
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
		if (arguments.length !== 1) throw "exactly one argument is required.";
		if (typeof arguments[0] !== "string") throw "s must represent a string type datum.";
		if (s.length > 999) throw "s exceeded 999 characters in length.";
		output_html_element = document.getElementById("output");
		if (s.length === 0) throw (p0 + ". . ." + p1);
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

function unit_test_0() {
	print_html_paragraph("is_nonnegative_integer() := " + is_nonnegative_integer() + ".");
	print_html_paragraph("is_nonnegative_integer(true) := " + is_nonnegative_integer(true) + ".");
	print_html_paragraph("is_nonnegative_integer(false) := " + is_nonnegative_integer(false) + ".");
	print_html_paragraph("is_nonnegative_integer('a') := " + is_nonnegative_integer('a') + ".");
	print_html_paragraph('is_nonnegative_integer("A") := ' + is_nonnegative_integer("A") + '.');
	print_html_paragraph("is_nonnegative_integer('finite') := " + is_nonnegative_integer('finite') + ".");
	print_html_paragraph('is_nonnegative_integer("FINITE") := ' + is_nonnegative_integer("FINITE") + '.');
	print_html_paragraph("is_nonnegative_integer(-1) := " + is_nonnegative_integer(-1) + ".");
	print_html_paragraph("is_nonnegative_integer(-1.1) := " + is_nonnegative_integer(-1.1) + ".");
	print_html_paragraph("is_nonnegative_integer(0) := " + is_nonnegative_integer(0) + ".");
	print_html_paragraph("is_nonnegative_integer(1) := " + is_nonnegative_integer(1) + ".");
	print_html_paragraph("is_nonnegative_integer(1.1) := " + is_nonnegative_integer(1.1) + ".");
	print_html_paragraph("* * *");
}

function unit_test_1() {
	print_html_paragraph("increment_natural_number():= " + increment_natural_number() + ".");
	print_html_paragraph("increment_natural_number(true) := " + increment_natural_number(true) + ".");
	print_html_paragraph("increment_natural_number(false) := " + increment_natural_number(false) + ".");
	print_html_paragraph("increment_natural_number('a') := " + increment_natural_number('a') + ".");
	print_html_paragraph('increment_natural_number("A") := ' + increment_natural_number("A") + '.');
	print_html_paragraph("increment_natural_number('finite') := " + increment_natural_number('finite') + ".");
	print_html_paragraph('increment_natural_number("FINITE") := ' + increment_natural_number("FINITE") + '.');
	print_html_paragraph("increment_natural_number(-1) := " + increment_natural_number(-1) + ".");
	print_html_paragraph("increment_natural_number(-1.1) := " + increment_natural_number(-1.1) + ".");
	print_html_paragraph("increment_natural_number(0) := " + increment_natural_number(0) + ".");
	print_html_paragraph("increment_natural_number(1) := " + increment_natural_number(1) + ".");
	print_html_paragraph("increment_natural_number(1.1) := " + increment_natural_number(1.1) + ".");
	print_html_paragraph("* * *");
}

function unit_test_2() {
	print_html_paragraph("increment_natural_number(0) := " + increment_natural_number(0) + ".");
	print_html_paragraph("increment_natural_number(increment_natural_number(0)) := " + increment_natural_number(increment_natural_number(0)) + ".");
	print_html_paragraph("increment_natural_number(1) := " + increment_natural_number(1) + ".");
	print_html_paragraph("increment_natural_number(increment_natural_number(1)) := " + increment_natural_number(increment_natural_number(1)) + ".");
	print_html_paragraph("increment_natural_number(increment_natural_number(2)) := " + increment_natural_number(increment_natural_number(2)) + ".");
	print_html_paragraph("increment_natural_number(increment_natural_number(3)) := " + increment_natural_number(increment_natural_number(3)) + ".");
	print_html_paragraph("increment_natural_number(increment_natural_number(4)) := " + increment_natural_number(increment_natural_number(4)) + ".");
	print_html_paragraph("increment_natural_number(increment_natural_number(5)) := " + increment_natural_number(increment_natural_number(5)) + ".");
	print_html_paragraph("increment_natural_number(increment_natural_number(6)) := " + increment_natural_number(increment_natural_number(6)) + ".");
	print_html_paragraph("increment_natural_number(increment_natural_number(7)) := " + increment_natural_number(increment_natural_number(7)) + ".");
	print_html_paragraph("increment_natural_number(increment_natural_number(8)) := " + increment_natural_number(increment_natural_number(8)) + ".");
	print_html_paragraph("increment_natural_number(increment_natural_number(9)) := " + increment_natural_number(increment_natural_number(9)) + ".");
	print_html_paragraph("* * *");
}
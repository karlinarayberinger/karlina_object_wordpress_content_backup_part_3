/**
 * file: binary_to_decimal.js
 * type: JavaScript
 * author: karbytes
 * date: 23_MARCH_2021
 * license: PUBLIC_DOMAIN
 */

/**
 * Generate a randomized sequence of exactly eight binary digits (where each binary digit (i.e. bit) is either '0' or '1').
 * @return {String} a sequence of exactly 8 binary digits (i.e. byte (which is an abbreviation for binary term)).
 */
function generate_random_binary_sequencec_string() {
	let index = 0, byte_string = "", random_bit = 0;
	for (index = 0; index < 8; index++) {
		random_bit = (Math.floor(Math.random() * 100) % 2);
		byte_string += random_bit;
	}
	return byte_string;
}

/**
 * Prefill the text field input element whose id is "binary_sequence" with a random byte.
 * Assume that this function is called when the web page, binary_to_decimal.html, is loaded by the web browser.
 */
function populate_input_field() {
	try {
		let text_field_input_element = {}, random_byte_string = "";
		text_field_input_element = document.getElementById("binary_sequence");
		random_byte_string = generate_random_binary_sequencec_string();
		text_field_input_element.value = random_byte_string;
	}
	catch(error) {
		console.log("An error occurred in populate_input_field(): " + error);
		return "";
	}
}

/**
 * Remove any space (' ') characters a sequence of characters.
 * @param {String} s is a sequence of zero or more text characters (where each character is a String type value).
 * @return {String} s without any space (' ') characters if s is a nonempty string; otherwise an empty string.
 */
function remove_space_characters_from_string(s) {
	try {
		let index = 0, output = "";
		if (arguments.length !== 1) throw "exactly one function input is required.";
		if (typeof arguments[0] !== "string") throw "s must be a String type value.";
		if (s.length === 0) throw "s appears to be an empty string. Hence, an empty string is returned.";
		for (index = 0; index < s.length; index += 1) if (s[index] !== ' ') output += s[index];
		return output;
	}
	catch(error) {
		console.log("An error occurred in remove_space_characters_from_string(s): " + error);
		return "";
	}
}

/**
 * Remove any characters from a sequence of characters other than '0' or '1'.
 * @param {String} s is a sequence of zero or more text characters (where each character is a String type value).
 * @return {String} s without any characters other than '0' or '1'; otherwise an empty string.
 */
function remove_non_bit_characters_from_string(s) {
	try {
		let i = 0, output = "";
		if (arguments.length !== 1) throw "exactly one function input is required.";
		if (typeof arguments[0] !== "string") throw "s must be a String type value.";
		if (s.length === 0) throw "s appears to be an empty string. Hence, an empty string is returned.";
		for (i = 0; i < s.length; i += 1) if ((s[i] === '0') || (s[i] === '1')) output += s[i];
		return output;
	}
	catch(error) {
		console.log("An error occurred in remove_non_bit_characters_from_string(s): " + error);
		return "";
	}
}

/**
 * Extract the current value which is displayed inside of the web page element whose id is "binary_sequence".
 * @return {Object} an array of 8 binary digits (where each bit is a Number type value).
 */
function extract_binary_input_from_text_field() {
	try {
		let bit_string = "", bit_number = 0, index = 0, bit_array = [];
		bit_string = document.getElementById("binary_sequence").value;
		bit_string = remove_space_characters_from_string(bit_string);
		bit_string = remove_non_bit_characters_from_string(bit_string);
		if (bit_string.length !== 8) throw "exactly 8 binary digits are required.";
		for (index = 0; index < 8; index++) {
			bit_number = Number.parseInt(bit_string[index]);
			bit_array.push(bit_number);
		}
		return bit_array;
	}
	catch(error) {
		console.log("An error occurred in extract_binary_input_from_text_field(): " + error);
		return [0,0,0,0,0,0,0,0];
	}
}

/**
 * Convert a sequence of 8 binary digits to its corresponding decimal integer.
 */
function binary_to_decimal() {
	try {
		let binary_input = "", decimal_output = 0, calculations_text = "", formula_text = "", i = 0, bit = 0, bit_value = 0;
		let p0 = ('<' + 'p' + '>'), p1 = ('<' + '/' + 'p' + '>');
		let s0 = ('<' + 'strong' + '>'), s1 = ('<' + '/' + 'strong' + '>');
		binary_input = extract_binary_input_from_text_field();
		while (i < 8) {
			bit = Number.parseInt(binary_input[i]);
			bit_value = bit * Math.pow(2, (7 - i));
			decimal_output += bit_value;
			calculations_text += (p0 + 'binary_input[' + i + '] := ' + s0 + bit + s1 + ' * (2 ^ ' + (7 - i) + ') = ' + s0 + bit_value + s1 + '.' + p1);
			formula_text += (s0 + bit_value + s1);
			if (i < 7) formula_text += ' + ';
			i += 1;
		}
		formula_text = (p0 + decimal_output + ' := ' + formula_text + '.' + p1);
		document.getElementById("decimal_output").innerHTML = decimal_output;
		document.getElementById("calculations_display").innerHTML = calculations_text + formula_text;
	}
	catch(error) {
		console.log("An error occurred in binary_to_decimal() : " + error);
	}
}
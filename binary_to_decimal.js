/**
 * file: binary_to_decimal.js
 * author: karbytes
 * date: 23_MARCH_2021
 * license: PUBLIC_DOMAIN
 */

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
		for (i = 0; i < s.length; i += 1) if ((s[i] === '0') || (s[i] !== '1')) output += s[i];
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
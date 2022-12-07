/**
 * Returns an uppercase string ending with exclamation point and a panic emoji between words if any.
 *
 * @param {string} inputMsg The string to convert.
 * @return {String} The string is converted to uppercase and an exclamation point added to end. A panic emoji is added between words if any.
 */
 export const panic = function(inputMsg) {
    let msg = typeof inputMsg === "string" ? inputMsg.trim() : null;
    let panicStr;
    if (msg) 
            panicStr = msg.includes(' ') ? `${msg.toUpperCase()}!`.split(" ").join(` ${String.fromCodePoint(128561)} `) : `${msg.toUpperCase()}!`;
    return panicStr;      
}

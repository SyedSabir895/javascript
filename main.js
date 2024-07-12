/*         METHOD CHAINING: calling one method after another in 
            a continous line of code  */

let username = window.prompt("enter your name");

// NO METHOD CHAINING //

/*username = username.trim()

let letter = username.charAt(0);

letter = letter.toUpperCase();

let extraChars = username.slice(1);

extraChars = extraChars.toLowerCase();

username = letter + extraChars;

console.log(username);     */


//  METHOD CHAINING //
// it is used to combine all the methods

username = username.trim().charAt(0).toUpperCase() 
+username.trim().slice(1).toLowerCase();
console.log(username);
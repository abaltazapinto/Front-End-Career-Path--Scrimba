/* I believe that you should pay closer attention to
code indentation and semicolon consistency */

/* JavaScript guidelines suggest using camelCase for
variable and function names, e.g., calculatePrice, finalPrice */
function calculate_price(basePrice) {
    /* Let's not include console.log statements in production code */
    console.log("Calculating final price...");
    /* Declare the discount variable with const
    to prevent reassignment */
    let discount = getDiscount(basePrice)
const final_price = basePrice - discount
return final_price;
}

/* Declare getDiscount with const
to prevent reassignment, or change this to a named function */
let getDiscount = function(basePrice) {
    /* This variable is unused; please remove it */
    let currentDiscount = 0;
    /* What do you think about returning the value using
    a ternary operator to make the function more concise? */
    if (basePrice > 100) {
        return 20
    } else {
        return 10;
    }
}

console.log(`The final price is $${calculate_price(90)}`)
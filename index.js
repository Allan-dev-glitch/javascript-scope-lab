// Write your solution in this file!// ---------------------------------------
// STEP 1: Variable Data (Global Scope)
// ---------------------------------------

let burgers = ["Hamburger", "Cheeseburger"];
let featuredDrink = "Strawberry Milkshake";


// ---------------------------------------
// STEP 2: Function + Function Scope (var)
// ---------------------------------------

function addBurger() {
  var newBurger = "Flatburger";   // function-scoped
  burgers.push(newBurger);        // add to global array
}


// ---------------------------------------
// STEP 3: Block Scope + If Statement
// ---------------------------------------

if (true) { // always true

  let anotherNewBurger = "Maple Bacon Burger";  // block-scoped
  burgers.push(anotherNewBurger);               // add to array

  function changeFeaturedDrink() {
    featuredDrink = "The JavaShake";            // update global variable
  }
}

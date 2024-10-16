console.log(document);

// Create a h2 element.
const h2 = document.createElement("h2");
console.log(h2);

// Set innerHTML of h2
h2.innerHTML = "The is a h2 heading";

// Get a reference to the body.
const body = document.body;
console.log(body);

// Append h2 to body.
body.appendChild(h2);

// Log the classList of the h2
const classes = h2.classList;
console.log(classes);

// Add class to h2
classes.add("heading");
console.log(classes);

classes.add("red");
console.log(classes);
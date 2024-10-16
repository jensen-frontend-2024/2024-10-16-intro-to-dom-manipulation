// console.log(document);

// // Create a h2 element.
// const h2 = document.createElement("h2");
// console.log(h2);

// // Set innerHTML of h2
// h2.innerText = "The is a h2 heading";

// // Get a reference to the body.
// const body = document.body;
// console.log(body);

// // Append h2 to body.
// body.appendChild(h2);

// // Log the classList of the h2
// const classes = h2.classList;
// console.log(classes);

// // Add class to h2
// classes.add("heading");
// console.log(classes);

// classes.add("red");
// console.log(classes);

// // Create a section with createElement and then update its innerHTML with a div that we have created with a multiline string.
// const section = document.createElement("section");

// const div = `
// <div class="container">
//     This the div
//     <p class="paragraph">This is a p-tag</p>
// </div>
// `;

// section.innerHTML = div;
// console.log(section)

// body.appendChild(section);

// Get reference to section and look at its children
const sec = document.querySelector(".sec");
console.log(sec.children);

// Let's loop through the children
const children = sec.children;

for (const el of children) {
  console.log(el);
  console.log(el.innerText);
}

// Get the first element child
const firstChild = sec.firstElementChild;
console.log(firstChild);

// Get the last element child
const lastChild = sec.lastElementChild;
console.log(lastChild);
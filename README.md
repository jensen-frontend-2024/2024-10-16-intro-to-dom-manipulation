# 2024-10-16 Intro to DOM Manipulation

<details>
<summary>Table of content</summary>

- [Intro](#dom-intro)
    - [Description of DOM](#description-of-dom)
    - [Access the DOM](#access-the-dom)
- [Manipulating the DOM](#manipulating-the-dom)
    - [Create Elements](#create-elements)
        - [createElement](#documentcreateelementtype--node)
    - [Add elements to DOM](#add-elements-to-dom)
        - [appendChild](#elementappendchildnode--node)
    - [Edit elements inside the DOM](#edit-elements-inside-the-dom)
        - [innerHTML](#elementinnerhtml)
        - [classList](#elementclasslist)

</details>


## DOM Intro 

### Description of DOM
The DOM, or Document Object Model is the JavaScript object that the browser creates for us. And it is made up of our HTML document and everything within that document, every element, every style, every js-file and so on. This JavaScript object is something we can work with, we can access everything tha is included in there with our code.

### Access the DOM

We can access the DOM by using `window.document` or just `document` in our code. It's a predefined variable that is available to us straight out of the box.

```js
console.log(document);
```

The above code will log the document to the console.

[Back to top](#2024-10-16-intro-to-dom-manipulation)

##  Manipulating the DOM

### Create elements

#### `document.createElement(type) => Node`

Creates an HTML element. Takes in one parameter which is the HTML element we want to create, and returns a node, which is a HTML Element. 

```js
const h2 = document.createElement("h2");
console.log(h2);
```
[Back to top](#2024-10-16-intro-to-dom-manipulation)

#### `element.innerHTML`

`innerHTML` is a value that we can get and set. We want to set the innerHTML of our h2-tag that we have created. This property also accepts html as multi-line string which we can use in order to make our html crating process easier and faster. A multi-line string is created with backtics.

```js
const div = `
<div class="container">
    This the div
    <p class="paragraph">This is a p-tag</p>
</div>
`
```

Now let's add this to the DOM by using an existing element and updating its innerHTML.

```js
const section = document.createElement("section")

section.innerHTML = div;
```

[Back to top](#2024-10-16-intro-to-dom-manipulation)

### Add elements to DOM

Just beacause we create an element with `createElement` doesn't mean that we can see it straight away. The element exisist but it's not visisble. In order to make it visible we need to append it somewhere. And this somewhere is alwyas another element. And the one element that always exists is the `<body></body>`-element. One method we can use is the `appendChild` method.

#### `element.appendChild(node) => node`

Let's append our h2 to the body.

```js
const body = document.body;
console.log(body);

body.appendChild(h2);
```

[Back to top](#2024-10-16-intro-to-dom-manipulation)

### Edit elements inside the DOM

#### `element.innerHTML`

`innerHTML` is a value that we can get and set. We want to set the innerHTML of our h2-tag that we have created.

```js
h2.innerHTML = "The is a h2 heading"
```

[Back to top](#2024-10-16-intro-to-dom-manipulation)

#### `element.classList`

`classList` is a value that looks like an array and contains every class that exists on the element. It looks like an array but it isn't an array so it has it own methods and properties.

```js
const classes = h2.classList;
console.log(classes); // Store the classList in a variable.
console.log(h2.classList); // Just log the raw property straight away

// Both above is equal to eachother.
```

To add a class to the classList, we invoke the method `add()` in the classList value _(whichs is a DOMTokenList)_.

```js
classes.add("heading");
console.log(classes);

classes.add("red")
console.log(classes);
```

[Back to top](#2024-10-16-intro-to-dom-manipulation)

### Get/retrieve elements from the DOM

#### `element.children` 

This property gets or sets the children of a HTML element. The type of the value is a HTMLCollection which is a kind of array that has its own methods and properties.

```js
const sec = document.querySelector('.sec');

console.log(sec.children);
```

If we want to, we could loop through this children object in order to see in more detail what we have there.

```js
const children = sec.children;

for (const el of children) {
    console.log(el)
}
```

#### `element.firstElementChild`

This property returns the first child of the parent element.

```js
const firstChild = sec.firstElementChild;

console.log(firstChild);
```

#### `element.lastElementChild`

This property returns the last child of the parent element.

```js
const lastChild = sec.lastElementChild;

console.log(lastChild);
```

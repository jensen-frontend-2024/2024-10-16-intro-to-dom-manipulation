# 2024-10-16 Intro to DOM Manipulation

## DOM

### Description of DOM
The DOM, or Document Object Model is the JavaScript object that the browser creates for us. And it is made up of our HTML document and everything within that document, every element, every style, every js-file and so on. This JavaScript object is something we can work with, we can access everything tha is included in there with our code.

### Access the DOM

We can access the DOM by using `window.document` or just `document` in our code. It's a predefined variable that is available to us straight out of the box.

```js
console.log(document);
```

The above code will log the document to the console.

### Manipulating the DOM

#### Create elements

`document.createElement(type) => Node`

Creates an HTML element. Takes in one parameter which is the HTML element we want to create, and returns a node, which is a HTML Element. 

```js
const h2 = document.createElement("h2");
console.log(h2);
```


## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: getElementById selects a single element by id.
getElementsByClassName selects multiple elements by class and returns a live HTMLCollection.querySelector selects the first matching element using CSS selector.
querySelectorAll selects all matching elements and returns a NodeList.

### 2. How do you create and insert a new element into the DOM?
ans: To create and insert a new element into the DOM, first use document.createElement to create the element. Then add content or attributes. Finally, insert it into the DOM using methods like appendChild, append, or prepend.

### 3. What is Event Bubbling? And how does it work?
ans: Event Bubbling is a process in JavaScript where an event starts from the target child element and then propagates upward to its parent elements until it reaches the document.

### 4. What is Event Delegation in JavaScript? Why is it useful?
ans: Event Delegation is a technique in JavaScript where instead of adding event listeners to multiple child elements, we add a single event listener to their parent element and use event bubbling to handle events.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
ans: preventDefault stops the default behavior of an element, while stopPropagation stops the event from bubbling up to parent elements.


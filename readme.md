# JavaScript Questions & Answers

## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans :  
getElementById retrieves a single element by an ID.  
getElementsByClassName retrieves multiple elements by class.  
querySelector retrieves the first matching element, and querySelectorAll retrieves all matching elements.

---

## 2. How do you create and insert a new element into the DOM?

Ans :  
let div = document.createElement("div");

---

## 3. What is Event Bubbling? And how does it work?

Ans :  
Event Bubbling means When you click on a child element,  
the event also goes to the parent element.

---

## 4. What is Event Delegation in JavaScript? Why is it useful?

Ans :  
Event Delegation means Instead of sending events to many children Giving an event to the parent once. Because through bubbling, the parent can understand which child has been clicked.

---

## 5. What is the difference between preventDefault() and stopPropagation() methods?

Ans :  
preventDefault() stops the default action.  
stopPropagation() stops the event bubbling.
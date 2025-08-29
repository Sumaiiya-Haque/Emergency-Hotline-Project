Q-1:What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans-1: getElementById and querySelector return a single element. getElementsByClassName  and querySelectorAll return a collection of elements.

      getElementsByClassName returns a live HTMLCollection, while querySelectorAll returns a static NodeList. 

      getElementById and getElementsByClassName take the ID or class name directly. querySelector and querySelectorAll require the CSS selector string (e.g., including # for ID, . for class).

Q-2: How do you create and insert a new element into the DOM?

Ans-2:Create new element:

```<div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const element = document.getElementById("div1");
element.appendChild(para);
</script>```

Insert a new element: 
To add the new element as the last child of the parent element, use parentElement.appendChild(newElement).
 To add the new element as the first child of the parent element, use parentElement.prepend(newElement).
To insert the new element before a specific existing child element, use parentElement.insertBefore(newElement, referenceElement). The referenceElement is the child element before which the new element will be inserted.
 Similar to appendChild(), but can accept multiple arguments (nodes or strings) and append them all.
 These methods are used to insert an element as a sibling after or before a reference element, rather than as a child of a parent. For example, referenceElement.after(newElement).

Q-3: What is Event Bubbling and how does it work?

Ans-3: In event bubbling, the event starts at the target element and propagates upward through its parent elements to the root of the DOM.

Event bubbling is enabled by default in JavaScript.
Event Listeners: If multiple event listeners are attached in the bubbling phase, they are executed in sequence, starting from the innermost target element.

Q-4: What is Event Delegation in JavaScript? Why is it useful?

Ans-4:
<div>
  <span>
    <button>Click Me!</button>
  </span>
</div>
Here we have a div which is a parent of a span which in turn is a parent of the button element.

Due to event bubbling, when the button receives an event, say click, that event bubbles up the tree, so span and div will respectively receive the event also.

Q-5: What is the difference between preventDefault() and stopPropagation() methods?

Ans-5:JavaScript preventDefault() Method: It is a method present in the event interface. This method prevents the browser from executing the default behavior of the selected element. This method can cancel the event only if the event is cancelable. For example, there are some events that can not be prevented, such as the scroll and wheel event.

event.preventDefault();
This method does not accept any parameter.

 JavaScript stopPropagation() event method: This method is used to prevent the parent element from accessing the event. Basically, this method is used to prevent the propagation of the same event from being called. For eg,  we have a button element inside a div tag and there is an onclick event on both of them, then whenever we try to activate the event attached to the button element, then the event attached to the div element also gets executed because div is the parent of the button element.

syntax:event.stopPropagation();

We can solve this problem by using the stopPropagation() method because this will prevent the parent from accessing the event.

/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding = If you use "this" on a function written in the global context, "this" will be binded to the global/window object  

* 2. Implicit binding = If you have an object, and you call a method within the object, "this" will be binded with the object itself. Another way of seeing it is that this is binded on what is left of a dot before a method declaration.

* 3. New binding = When you use a constructor, "this" is binded with the new instance of the object you just created. As we now we use the world "new" (to return and) to instance a new object with a constructor.

* 4. Explicit binding = Whenever you use Function.prototype.call (or apply, or bind) the binding of "this" is explicity assigned to the object you are apllying the method too.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function globalBinding() {
    console.log(this)
};

// Principle 2

// code example for Implicit Binding
const implicitBinding = {
    thisFunction: thisFunction,
};

// Principle 3

// code example for New Binding
function ThisConstructor () {
    this.thisFunction = function () {       //bad pratice
        console.log(this);
    }
};
const newBinding = new ThisConstructor();

// Principle 4

// code example for Explicit Binding

function thisFunction () {
    console.log(this)
}

const explicitBinding = thisFunction.bind({});

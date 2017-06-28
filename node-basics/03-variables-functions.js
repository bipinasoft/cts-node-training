function sayHi() {
    console.log('Hi to the world');
}

sayHi();

// function expression
var sayBye = function() {
    console.log('Saying Bye to the world of heavy weight backends');
};

sayBye();

function callFunction(fun) {
    fun();
}

callFunction(sayHi);

function addNumbers(a, b) {
    let c = a + b;
    console.log(c);
}

addNumbers(15, 25);

var myfunc = addNumbers;

myfunc.call(this, 9, 9);
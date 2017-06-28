function counter(arr) {
    let totalCount = arr.length;

    console.log('There are totally ' + totalCount + ' no of items in teh array');
}

function adder(a, b) {
    let result = a + b;

    console.log('The added result is : ', result);
}

const PI = 3.142;

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.PI = PI;

module.exports = {
    counter,
    adder,
    PI,
};

const input = "123";

const number = Number(input);

console.info(typeof input);
console.info(typeof number);
console.info(number);
console.info(Number("hello"));


const data = Number("12345");
console.info(Number.isInteger(data));
console.info(Number.isNaN(data));

const value = Number("12345");
console.info(value.toString(2));
console.info(value.toLocaleString(2));
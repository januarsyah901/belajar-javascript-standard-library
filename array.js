function info(params) {
  console.info(params);
}
// for each
{
  const cars = ["toyota", "hyundai", "honda", "wuling", "mercy"];

  cars.forEach((element) => {
    console.info(`name of this car is ${element}`);
  });
}
// array queue : shift() 'll take the frist of array
{
  const customers = [];
  customers.push("John");
  customers.push("Jane");
  customers.push("Jim");

  console.info(customers.shift());
  console.info(customers.shift());
  console.info(customers.shift());
}
// array stack : pop() 'll take the end of array
{
  const stack = [];
  stack.push("clara");
  stack.push("hony");
  stack.push("nina");

  console.info(stack.pop());
  console.info(stack.pop());
  console.info(stack.pop());
}
// array search
{
  const nilai = [67, 54, 99, 89, 23, 67];

  console.info(nilai.find((lulus) => lulus > 75));
  console.info(nilai.findIndex((data) => data == 89));
  console.info(nilai.includes(100));
  console.info(nilai.indexOf(23));
  console.info(nilai.lastIndexOf(67));
}
// array filter
{
  const numbers = [];

  for (let i = 1; i <= 99; i++) {
    numbers.push(i);
  }

  const genap = numbers.filter((number) => number % 2 == 0);
  const ganjil = numbers.filter((number) => number % 2 == 1);

  info(genap);
  info(ganjil);
}
// array transform
{
  const name = "ahmad akbar al faiz".split(" ");

  const nameUpper = name.map((value) => value.toLocaleUpperCase());

  console.info(nameUpper.reduce((before, value) => before + " " + value));
  console.info(nameUpper.reduceRight((before, value) => before + " " + value));

  const numbers = [12,4,3,3436,7,43,3,4,5];

  info(numbers.reduce((before,value) => before + value));
}

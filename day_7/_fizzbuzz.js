/*//Create a file named `fizzbuzz.js` and within that file, write a program that logs the numbers from 1 to 100 with the following rules:
* For any number that is a multiple of 3, log 'Fizz'
* For any number that is a multiple of 5, log 'Buzz'
* For any number that is a multiple of both 3 and 5, log 'FizzBuzz'
* For all other numbers, log the number.

The output of you program will look something like this:
```
=> 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, ..., 98, Fizz, Buzz
```

### Bonus
Can you write the program so that it will run for any range of numbers? */

for (var i = 1; i < 101; i++) {
  var multipleOfThree = i % 3 === 0;
  var multipleOfFive = i % 5 === 0;

  if(multipleOfThree && multipleOfFive){
    console.log('FizzBuzz');
  }
  else if (multipleOfThree) {
      console.log('Fizz');
  }
  else if (multipleOfFive) {
      console.log ('Buzz');
  }
  else {
      console.log(i);
    }
}

for (var i = min; i < max; i++) {
  var multipleOfThree = i % 3 === 0;
  var multipleOfFive = i % 5 === 0;
  var min = 1
  var max = 250

  if(multipleOfThree && multipleOfFive){
    console.log('FizzBuzz');
  }
  else if (multipleOfThree) {
      console.log('Fizz');
  }
  else if (multipleOfFive) {
      console.log ('Buzz');
  }
  else {
      console.log(i);
    }
}

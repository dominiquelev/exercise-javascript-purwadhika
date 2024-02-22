var intToRoman = function (num) {
  const romanHash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const romanNumerals = Object.keys(romanHash).reverse();
  let accumulator = "";
  const numString = num.toString();
  for (let i = 0; i < numString.length; i++) {
    const digit = parseInt(numString[i]);
    const placeValue = Math.pow(10, numString.length - i - 1);
    let value = digit * placeValue;
    console.log(digit);
    for (const roman of romanNumerals) {
      const romanValue = romanHash[roman];
      if (value >= romanValue) {
        accumulator += roman.repeat(Math.floor(value / romanValue));
        value %= romanValue;
        console.log(accumulator);
      }
    }
  }

  accumulator = accumulator.replace("DCCCC", "CM");
  accumulator = accumulator.replace("CCCC", "CD");
  accumulator = accumulator.replace("LXXXX", "XC");
  accumulator = accumulator.replace("XXXX", "XL");
  accumulator = accumulator.replace("VIIII", "IX");
  accumulator = accumulator.replace("IIII", "IV");

  return accumulator;
};
console.log(intToRoman(1234));

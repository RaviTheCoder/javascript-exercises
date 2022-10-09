const ftoc = function(farenheit) {
  return Math.round(((farenheit - 32) * .5556) * 10) / 10;
};

ftoc(32);

const ctof = function(celsius) {
  // return Math.round(((celsius * 1.8) + 32) * 10) / 10;
  let conversion = (celsius * 1.8) + 32;
  return Math.round(conversion * 10) / 10;
};

ctof(73.2);

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

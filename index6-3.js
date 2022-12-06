function getNum (x) {
  return function (y) {
    return x + y
  };
   };
  const x = 2;
  const y = 3;

  console.log(getNum (x)(y));


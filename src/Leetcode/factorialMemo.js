const memoize = (fn) => {
  let cache = {};

  return (...args) => {
    let n = args[0];

    if (n in cache) {
      return cache[n];
    } else {
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  };
};

const factorial = {
  memo: memoize((x) => {
    if (x <= 0) {
      return 1;
    } else {
      return x * factorial.memo(x - 1);
    }
  }),
};

export default factorial;

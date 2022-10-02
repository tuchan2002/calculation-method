const jacobi = (a: any, x: any, b: any) => {
  const n = a.length;
  for (let j = 0; j < n; j++) {
    let temp = b[j];
    for (let i = 0; i < n; i++) {
      if (j != i) {
        temp -= a[j][i] * x[i];
      }
    }
    x[j] = temp / a[j][j];
  }
  return x;
};

const jacobiMethod = (a: any, x: any, b: any, n: Number) => {
  const result: any = {
    valueOfRoot: [],
    process: [[]],
  };
  for (let i = 1; i <= n; i++) {
    const xResult = jacobi(a, x, b);
    result.process.push({ n: i, value: xResult });

    if (i === n) result.valueOfRoot = xResult;
  }
  return result;
};

export default jacobiMethod;

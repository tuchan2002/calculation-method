interface Props {
  matrixA: Array<number[]>;
  matrixB: Array<number>;
  n0: number;
}

const gaussSeidel = (a: any, x: any, b: any) => {
  const n = a.length;
  const xResult = [...x];
  for (let j = 0; j < n; j++) {
    let temp = b[j];
    for (let i = 0; i < n; i++) {
      if (j !== i) {
        temp -= a[j][i] * xResult[i];
      }
    }
    xResult[j] = temp / a[j][j];
  }
  return xResult;
};

const gaussSeidelMethod = ({ matrixA, matrixB, n0 }: Props) => {
  if (matrixA.length !== matrixB.length) {
    alert("ERROR: The size of matrix A is different from the size of matrix B");
    return;
  }

  const result: any = {
    valueOfRoot: [],
    process: [],
  };

  let xResult = new Array(matrixB.length).fill(0);
  result.process.push({ n: 0, value: `[${xResult.join(" , ")}]` });
  for (let i = 1; i <= n0; i++) {
    xResult = gaussSeidel(matrixA, xResult, matrixB);
    result.process.push({ n: i, value: `[${xResult.join(" , ")}]` });

    if (i === -(-n0)) {
      result.valueOfRoot = `[${xResult.join(" , ")}]`;
    }
  }
  return result;
};

export default gaussSeidelMethod;

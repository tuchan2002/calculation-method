const convertToArrayNumber = (stringInput: any) => {
  const arrayOutput = stringInput.trim().split("\n");
  for (let i = 0; i < arrayOutput.length; i++) {
    arrayOutput[i] = arrayOutput[i].trim().split(" ");
    for (let j = 0; j < arrayOutput[i].length; j++) {
      arrayOutput[i][j] = -(-arrayOutput[i][j]);
    }
  }
  return arrayOutput;
};

export default convertToArrayNumber;

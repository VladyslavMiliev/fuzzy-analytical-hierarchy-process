// delivery companies = An
const deliveryCompanies = {
  A1: "FedEx",
  A2: "UPS",
  A3: "Amazon",
  A4: "USPS",
};

// criteria = Cn
const criteria = {
  C1: "cargo support",
  C2: "cargo insurance",
  C3: "on-time delivery",
};

// triangular fuzzy numbers
const fuzzyNumbers = {
  1: [1, 1, 1],
  2: [1, 2, 3],
  3: [2, 3, 4],
  4: [3, 4, 5],
  5: [4, 5, 6],
  6: [5, 6, 7],
  7: [6, 7, 8],
  8: [7, 9, 9],
  9: [9, 9, 9],
};

// pairwise contribution matrix of the criteria
const pairwiseNumbers = {
  1: [1 / 3, 1 / 2, 1 / 1],
  2: [1 / 4, 1 / 3, 1 / 2],
  3: [1 / 5, 1 / 4, 1 / 3],
  4: [1 / 6, 1 / 5, 1 / 4],
  5: [1 / 7, 1 / 6, 1 / 5],
  6: [1 / 8, 1 / 7, 1 / 6],
  7: [1 / 9, 1 / 8, 1 / 7],
};
const roundedPairwiseNumbers = [];
for (const key in pairwiseNumbers) {
  if (pairwiseNumbers.hasOwnProperty(key)) {
    const roundedArray = pairwiseNumbers[key].map((number) =>
      Number(number.toFixed(2))
    );
    roundedPairwiseNumbers[key] = roundedArray;
  }
}
// the pairwise comparison matrix of the criteria
const matrix = [
  ["C1 (cargo support)", fuzzyNumbers[1], fuzzyNumbers[3], fuzzyNumbers[4]],
  [
    "C1 (cargo insurance)",
    roundedPairwiseNumbers[2],
    fuzzyNumbers[1],
    fuzzyNumbers[2],
  ],
  [
    "C1 (on-time delivery)",
    roundedPairwiseNumbers[3],
    roundedPairwiseNumbers[1],
    fuzzyNumbers[1],
  ],
];

// calculation of the geometric mean
let resultMatrix = [];

for (let i = 0; i < 3; i++) {
  let rowResult = [];
  for (let j = 0; j < 3; j++) {
    let result =
      (matrix[i][1][j] * matrix[i][2][j] * matrix[i][3][j]) ** (1 / 3);
    rowResult.push(result.toFixed(4));
  }
  resultMatrix.push(rowResult);
}

let r1 = resultMatrix[0];
let r2 = resultMatrix[1];
let r3 = resultMatrix[2];

// calculation of the vector summation
let sr = [];

for (let i = 0; i < resultMatrix.length; i++) {
  sr.push((Number(r1[i]) + Number(r2[i]) + Number(r3[i])).toFixed(4));
}

// Calculation of the inversion vector
let isr = [];

for (let i = sr.length - 1; i >= 0; i--) {
  isr.push((1 / Number(sr[i])).toFixed(4));
}

// Calculation of the fuzzy weights
let fw = [];

for (let i = 0; i < resultMatrix.length; i++) {
  for (let j = 0; j < isr.length; j++) {
    fw.push((resultMatrix[i][j] * isr[j]).toFixed(4));
  }
}
let fwC1 = fw.slice(0, isr.length);
let fwC2 = fw.slice(isr.length, 2 * isr.length);
let fwC3 = fw.slice(2 * isr.length);

// Defuzzification
let m = [];

for (let i = 0; i < resultMatrix.length; i++) {
  let sum = 0;
  for (let j = 0; j < isr.length; j++) {
    let fwValue = Number(fw[i * isr.length + j]);
    sum += isNaN(fwValue) ? 0 : fwValue;
  }
  m.push((sum / isr.length).toFixed(4));
}

// Normalization of weights
let n = [];
let sumM = m.reduce((acc, val) => acc + Number(val), 0);

for (let i = 0; i < m.length; i++) {
  n.push((Number(m[i]) / sumM).toFixed(4));
}

// the pair wise comparison matrix of the alternatives by the criterion C1
const matrixC1 = [
  ["A1 (FedEx)", fuzzyNumbers[1], fuzzyNumbers[2], fuzzyNumbers[4]],
  ["A2 (UPS)", roundedPairwiseNumbers[1], fuzzyNumbers[1], fuzzyNumbers[3]],
  [
    "A3 (Amazon)",
    roundedPairwiseNumbers[3],
    roundedPairwiseNumbers[2],
    fuzzyNumbers[1],
  ],
  ["A4 (USPS)", fuzzyNumbers[5], roundedPairwiseNumbers[4], fuzzyNumbers[3]],
];

// calculation of the geometric mean
let resultMatrixC1 = [];

for (let i = 0; i < 4; i++) {
  let rowResultC1 = [];
  for (let j = 0; j < 3; j++) {
    let resultC1 =
      (matrixC1[i][1][j] * matrixC1[i][2][j] * matrixC1[i][3][j]) ** (1 / 3);
    rowResultC1.push(resultC1.toFixed(4));
  }
  resultMatrixC1.push(rowResultC1);
}
let r1a1 = resultMatrixC1[0];
let r2a1 = resultMatrixC1[1];
let r3a1 = resultMatrixC1[2];
let r4a1 = resultMatrixC1[3];

// calculation of the vector summation
let sra1 = [];

for (let i = 0; i < r1a1.length; i++) {
  sra1.push(
    (
      Number(r1a1[i]) +
      Number(r2a1[i]) +
      Number(r3a1[i]) +
      Number(r4a1[i])
    ).toFixed(4)
  );
}

// Calculation of the inversion vector
let isra1 = [];

for (let i = sra1.length - 1; i >= 0; i--) {
  isra1.push((1 / Number(sra1[i])).toFixed(4));
}

// Calculation of the fuzzy weights
let fwa1 = [];

for (let i = 0; i < resultMatrixC1.length; i++) {
  for (let j = 0; j < isra1.length; j++) {
    fwa1.push((resultMatrixC1[i][j] * isra1[j]).toFixed(4));
  }
}

let fw1A1 = fwa1.slice(0, isra1.length);
let fw1A2 = fwa1.slice(isra1.length, 2 * isra1.length);
let fw1A3 = fwa1.slice(2 * isra1.length, 3 * isra1.length);
let fw1A4 = fwa1.slice(3 * isra1.length, 4 * isra1.length);

// Defuzzification
let ma1 = [];

for (let i = 0; i < resultMatrixC1.length; i++) {
  let suma1 = 0;
  for (let j = 0; j < isra1.length; j++) {
    let fwValueA1 = Number(fwa1[i * isra1.length + j]);
    suma1 += isNaN(fwValueA1) ? 0 : fwValueA1;
  }
  ma1.push((suma1 / isra1.length).toFixed(4));
}

// Normalization of weights
let na1 = [];
let sumMa1 = ma1.reduce((acc, val) => acc + Number(val), 0);

for (let i = 0; i < ma1.length; i++) {
  na1.push((Number(ma1[i]) / sumMa1).toFixed(4));
}
// the pair wise comparison matrix of the alternatives by the criterion C2
const matrixC2 = [
  [
    "A1 (FedEx)",
    fuzzyNumbers[1],
    roundedPairwiseNumbers[2],
    roundedPairwiseNumbers[3],
  ],
  ["A2 (UPS)", fuzzyNumbers[3], fuzzyNumbers[1], roundedPairwiseNumbers[2]],
  ["A3 (Amazon)", fuzzyNumbers[5], fuzzyNumbers[3], fuzzyNumbers[1]],
  ["A4 (USPS)", fuzzyNumbers[1], roundedPairwiseNumbers[2], fuzzyNumbers[5]],
];

// calculation of the geometric mean
let resultMatrixC2 = [];

for (let i = 0; i < 4; i++) {
  let rowResultC2 = [];
  for (let j = 0; j < 3; j++) {
    let resultC2 =
      (matrixC2[i][1][j] * matrixC2[i][2][j] * matrixC2[i][3][j]) ** (1 / 3);
    rowResultC2.push(resultC2.toFixed(4));
  }
  resultMatrixC2.push(rowResultC2);
}
let r1a2 = resultMatrixC2[0];
let r2a2 = resultMatrixC2[1];
let r3a2 = resultMatrixC2[2];
let r4a2 = resultMatrixC2[3];

// calculation of the vector summation
let sra2 = [];

for (let i = 0; i < r1a2.length; i++) {
  sra2.push(
    (
      Number(r1a2[i]) +
      Number(r2a2[i]) +
      Number(r3a2[i]) +
      Number(r4a2[i])
    ).toFixed(4)
  );
}

// Calculation of the inversion vector
let isra2 = [];

for (let i = sra2.length - 1; i >= 0; i--) {
  isra2.push((1 / Number(sra2[i])).toFixed(4));
}

// Calculation of the fuzzy weights
let fwa2 = [];

for (let i = 0; i < resultMatrixC2.length; i++) {
  for (let j = 0; j < isra2.length; j++) {
    fwa2.push((resultMatrixC2[i][j] * isra2[j]).toFixed(4));
  }
}

let fw2A1 = fwa2.slice(0, isra2.length);
let fw2A2 = fwa2.slice(isra2.length, 2 * isra2.length);
let fw2A3 = fwa2.slice(2 * isra2.length, 3 * isra2.length);
let fw2A4 = fwa2.slice(3 * isra2.length, 4 * isra2.length);

// Defuzzification
let ma2 = [];

for (let i = 0; i < resultMatrixC2.length; i++) {
  let suma2 = 0;
  for (let j = 0; j < isra2.length; j++) {
    let fwValueA2 = Number(fwa2[i * isra2.length + j]);
    suma2 += isNaN(fwValueA2) ? 0 : fwValueA2;
  }
  ma2.push((suma2 / isra2.length).toFixed(4));
}

// Normalization of weights
let na2 = [];
let sumMa2 = ma2.reduce((acc, val) => acc + Number(val), 0);

for (let i = 0; i < ma2.length; i++) {
  na2.push((Number(ma2[i]) / sumMa2).toFixed(4));
}
// the pair wise comparison matrix of the alternatives by the criterion C3
const matrixC3 = [
  ["A1 (FedEx)", fuzzyNumbers[1], roundedPairwiseNumbers[2], fuzzyNumbers[2]],
  ["A2 (UPS)", fuzzyNumbers[3], fuzzyNumbers[1], fuzzyNumbers[3]],
  ["A3 (Amazon)", roundedPairwiseNumbers[1], fuzzyNumbers[3], fuzzyNumbers[1]],
  ["A4 (USPS)", fuzzyNumbers[2], roundedPairwiseNumbers[6], fuzzyNumbers[1]],
];

// calculation of the geometric mean
let resultMatrixC3 = [];

for (let i = 0; i < 4; i++) {
  let rowResultC3 = [];
  for (let j = 0; j < 3; j++) {
    let resultC3 =
      (matrixC3[i][1][j] * matrixC3[i][2][j] * matrixC3[i][3][j]) ** (1 / 3);
    rowResultC3.push(resultC3.toFixed(4));
  }
  resultMatrixC3.push(rowResultC3);
}
let r1a3 = resultMatrixC3[0];
let r2a3 = resultMatrixC3[1];
let r3a3 = resultMatrixC3[2];
let r4a3 = resultMatrixC3[3];

// calculation of the vector summation
let sra3 = [];

for (let i = 0; i < r1a3.length; i++) {
  sra3.push(
    (
      Number(r1a3[i]) +
      Number(r2a3[i]) +
      Number(r3a3[i]) +
      Number(r4a3[i])
    ).toFixed(4)
  );
}

// Calculation of the inversion vector
let isra3 = [];

for (let i = sra3.length - 1; i >= 0; i--) {
  isra3.push((1 / Number(sra3[i])).toFixed(4));
}

// Calculation of the fuzzy weights
let fwa3 = [];

for (let i = 0; i < resultMatrixC3.length; i++) {
  for (let j = 0; j < isra3.length; j++) {
    fwa3.push((resultMatrixC3[i][j] * isra3[j]).toFixed(4));
  }
}

let fw3A1 = fwa3.slice(0, isra3.length);
let fw3A2 = fwa3.slice(isra3.length, 2 * isra3.length);
let fw3A3 = fwa3.slice(2 * isra3.length, 3 * isra3.length);
let fw3A4 = fwa3.slice(3 * isra3.length, 4 * isra3.length);

// Defuzzification
let ma3 = [];

for (let i = 0; i < resultMatrixC3.length; i++) {
  let suma3 = 0;
  for (let j = 0; j < isra3.length; j++) {
    let fwValueA3 = Number(fwa3[i * isra3.length + j]);
    suma3 += isNaN(fwValueA3) ? 0 : fwValueA3;
  }
  ma3.push((suma3 / isra3.length).toFixed(4));
}

// Normalization of weights
let na3 = [];
let sumMa3 = ma3.reduce((acc, val) => acc + Number(val), 0);

for (let i = 0; i < ma3.length; i++) {
  na3.push((Number(ma3[i]) / sumMa3).toFixed(4));
}

// resulting scores calculation
let resa1 = (n[0] * na1[0] + n[1] * na2[0] + n[2] * na3[0]).toFixed(4);
let resa2 = (n[0] * na1[1] + n[1] * na2[1] + n[2] * na3[1]).toFixed(4);
let resa3 = (n[0] * na1[2] + n[1] * na2[2] + n[2] * na3[2]).toFixed(4);
let resa4 = (n[0] * na1[3] + n[1] * na2[3] + n[2] * na3[3]).toFixed(4);
console.log("Delivery companies: ");
console.log(deliveryCompanies);
console.log("Criteria: ");
console.log(criteria);
console.log("Triangular fuzzy numbers: ");
console.log(fuzzyNumbers);
console.log("The pairwise contribution matrix of the criteria: ");
console.log(roundedPairwiseNumbers);
console.log("The pairwise comparison matrix of the criteria: ");
console.table(matrix);
console.log(
  "The geometric mean of fuzzy comparison values of each criterion: " +
    "\n" +
    "C1: " +
    r1 +
    "\n" +
    "C2: " +
    r2 +
    "\n" +
    "C3: " +
    r3
);
console.log("Vector summation: ");
console.log(sr);
console.log("Inversion vector: ");
console.log(isr);
console.log("Fuzzy weights for C1: ");
console.log(fwC1);
console.log("Fuzzy weights for C2: ");
console.log(fwC2);
console.log("Fuzzy weights for C3: ");
console.log(fwC3);
console.log("Defuzzification: ");
console.log(m);
console.log("Normalized weights: ");
console.log(n);
console.log(
  "The pairwise comparison matrix of the alternatives by the criterion C1: "
);
console.table(matrixC1);
console.log(
  "The geometric mean of fuzzy comparison values of each alternative by the criterion C1: " +
    "\n" +
    "A1: " +
    r1a1 +
    "\n" +
    "A2: " +
    r2a1 +
    "\n" +
    "A3: " +
    r3a1 +
    "\n" +
    "A4: " +
    r4a1
);
console.log("Vector summation: ");
console.log(sra1);
console.log("Inversion vector: ");
console.log(isra1);
console.log("Fuzzy weights for A1: ");
console.log(fw1A1);
console.log("Fuzzy weights for A2: ");
console.log(fw1A2);
console.log("Fuzzy weights for A3: ");
console.log(fw1A3);
console.log("Fuzzy weights for A4: ");
console.log(fw1A1);
console.log("Defuzzification: ");
console.log(ma1);
console.log("Normalized weights: ");
console.log(na1);
console.log(
  "The pairwise comparison matrix of the alternatives by the criterion C2: "
);
console.table(matrixC2);
console.log(
  "The geometric mean of fuzzy comparison values of each alternative by the criterion C2: " +
    "\n" +
    "A1: " +
    r1a2 +
    "\n" +
    "A2: " +
    r2a2 +
    "\n" +
    "A3: " +
    r3a2 +
    "\n" +
    "A4: " +
    r4a2
);
console.log("Vector summation: ");
console.log(sra2);
console.log("Inversion vector: ");
console.log(isra2);
console.log("Fuzzy weights for A1: ");
console.log(fw2A1);
console.log("Fuzzy weights for A2: ");
console.log(fw2A2);
console.log("Fuzzy weights for A3: ");
console.log(fw2A3);
console.log("Fuzzy weights for A4: ");
console.log(fw2A4);
console.log("Defuzzification: ");
console.log(ma2);
console.log("Normalized weights: ");
console.log(na2);
console.log(
  "The pairwise comparison matrix of the alternatives by the criterion C3: "
);
console.table(matrixC3);
console.log(
  "The geometric mean of fuzzy comparison values of each alternative by the criterion C3: " +
    "\n" +
    "A1: " +
    r1a3 +
    "\n" +
    "A2: " +
    r2a3 +
    "\n" +
    "A3: " +
    r3a3 +
    "\n" +
    "A4: " +
    r4a3
);
console.log("Vector summation: ");
console.log(sra3);
console.log("Inversion vector: ");
console.log(isra3);
console.log("Fuzzy weights for A1: ");
console.log(fw3A1);
console.log("Fuzzy weights for A2: ");
console.log(fw3A2);
console.log("Fuzzy weights for A3: ");
console.log(fw3A3);
console.log("Fuzzy weights for A4: ");
console.log(fw3A4);
console.log("Defuzzification: ");
console.log(ma3);
console.log("Normalized weights: ");
console.log(na3);
console.log("Normalized weights of each alternative for each criterion : ");
console.table(
  "An (cargo support): " +
    na1 +
    "\n" +
    "An (cargo insurance): " +
    na2 +
    "\n" +
    "An (on-time delivery): " +
    na3
);
console.log("Resulting scores of each alternative: ");
console.log("\x1b[31m%s\x1b[0m", resa1);
console.log(resa2);
console.log(resa3);
console.log(resa4);

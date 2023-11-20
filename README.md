# Fuzzy Analytic Hierarchy Process (FAHP) JavaScript Script

This JavaScript script implements the Fuzzy Analytic Hierarchy Process (FAHP) to evaluate and rank delivery companies based on specified criteria. 
The FAHP is a decision-making technique that incorporates fuzzy logic and analytic hierarchy process principles.

# Usage
The script evaluates delivery companies based on the following criteria:
```
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
```
Fuzzy Numbers
Triangular fuzzy numbers are used in the FAHP calculation:
```
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
```
Pairwise Contribution Matrix
The pairwise contribution matrix of the criteria is represented by the following matrix:
```
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
```

# FAHP Calculation Steps
The script follows these major steps in FAHP calculations:

Pairwise Comparison Matrix of Criteria (matrix): Displays the pairwise comparison matrix of the criteria.

Geometric Mean Calculation: Calculates the geometric mean of fuzzy comparison values for each criterion (C1, C2, C3).

Vector Summation: Calculates the vector summation based on the geometric mean.

Inversion Vector: Calculates the inversion vector.

Fuzzy Weights Calculation: Computes fuzzy weights for each criterion.

Defuzzification: Performs defuzzification to obtain crisp values.

Normalization of Weights: Normalizes the obtained weights.

Pairwise Comparison Matrix of Alternatives by Criteria (matrixC1, matrixC2, matrixC3): Displays the pairwise comparison matrix of alternatives by each criterion.

Resulting Scores Calculation: Combines the normalized weights to calculate resulting scores for each alternative.

# Results
The script outputs the following information:

Pairwise comparison matrices
Geometric mean of fuzzy comparison values for each criterion
Vector summation
Inversion vector
Fuzzy weights for each criterion
Defuzzification results
Normalized weights
Pairwise comparison matrices of alternatives by criteria
Resulting scores for each alternative

![image](https://github.com/VladyslavMiliev/fuzzy-analytical-hierarchy-process/assets/84059723/d287b08f-bae9-4640-aaec-1a4a225a63d5)

Feel free to customize and integrate this script into your project for decision-making processes related to delivery company selection.

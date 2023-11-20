# Fuzzy Analytical Hierarchy Process (FAHP) for Delivery Company Evaluation
![image](https://github.com/VladyslavMilievNotAbot/fuzzy-analytical-hierarchy-process/assets/84059723/46c0b8a9-55bc-41a1-879c-bddc8dd5651c)

# Overview
This repository contains a JavaScript implementation of the Fuzzy Analytical Hierarchy Process (FAHP) to aid in the evaluation and comparison of delivery companies. The FAHP is employed to handle the imprecise and uncertain nature of decision-making processes by incorporating fuzzy logic.

# Code Structure
The code is structured into distinct sections, each dedicated to a specific step in the FAHP process:

Criteria and Delivery Companies
deliveryCompanies: Mapping of delivery company codes to their names.
criteria: Mapping of criteria codes to specific criteria (e.g., cargo support, cargo insurance, on-time delivery).
Fuzzy Numbers
fuzzyNumbers: Triangular fuzzy numbers employed in FAHP calculations.
Pairwise Contribution Matrix
pairwiseNumbers: Pairwise contribution matrix of the criteria.
roundedPairwiseNumbers: Rounded values of the pairwise contribution matrix.
Pairwise Comparison Matrix
matrix: Pairwise comparison matrix of the criteria.
Geometric Mean Calculation
Calculation of the geometric mean for each criterion.
Vector Summation and Inversion
Calculation of vector summation and inversion vector.
Fuzzy Weights
Calculation of fuzzy weights for each criterion.
Defuzzification
Defuzzification process to obtain crisp values.
Normalization of Weights
Normalization of weights for each criterion.
Pairwise Comparison Matrix for Alternatives
Pairwise comparison matrices for each criterion and alternative.
Resulting Scores
Calculation of resulting scores for each alternative based on normalized weights.
Console Output
Console log statements displaying various matrices, calculations, and final results.

# How to Use
To utilize this code:

Clone the repository.
Open the fahp.js file.
Execute the script using a JavaScript environment (e.g., Node.js).
Ensure that you have Node.js installed on your system to run the script.

# Results
The final results include normalized weights for each criterion, resulting scores for each alternative, and a color-coded display of the top-ranked alternative.
![image](https://github.com/VladyslavMiliev/fuzzy-analytical-hierarchy-process/assets/84059723/fc588f07-05d4-4c63-ae8f-7b73a19dbe84)

Feel free to adapt and extend this code for your specific use case and criteria. If you have any questions or need further clarification on the FAHP implementation, refer to the relevant sections in the code or consult external resources on the Fuzzy Analytical Hierarchy Process.
# 25-15-21 1-18-5 1 3-15-3-11-19-21-3-11-5-18

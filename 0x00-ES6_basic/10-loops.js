export default function appendToEachArrayValue(array, appendString) {
  const result = []; // Create a new array

  for (const value of array) { // Use for...of
    result.push(appendString + value); // Push modified value into new array
  }

  return result; // Return new array
}

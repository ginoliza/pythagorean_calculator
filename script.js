let word = '';

const conciliacionCenters = [
  "Centro de Armonía Legal",
  "Instituto de Solución Amistosa",
  "Centro de Resolución Pacífica",
  "Instituto de Mediación y Conciliación",
  "Centro de Acuerdos Justos",
  "Fundación de Conciliación y Diálogo",
  "Centro de Resolución de Conflictos",
  "Casa de la Solución Amigable",
  "Centro de Arreglo Amigable",
  "Instituto de Conciliación y Paz",
  "Centro de Diálogo y Acuerdos",
  "Centro de Justicia Amistosa",
  "Centro de Conciliación y Armonía",
  "Instituto de Resolución Alternativa",
  "Centro de Conciliación Integral"
];

// Mapping of alphabet letters to numbers
const letterMapping = {
  'A': 1, 'J': 1, 'S': 1,
  'B': 2, 'K': 2, 'T': 2,
  'C': 3, 'L': 3, 'U': 3,
  'D': 4, 'M': 4, 'V': 4,
  'E': 5, 'N': 5, 'W': 5,
  'F': 6, 'O': 6, 'X': 6,
  'G': 7, 'P': 7, 'Y': 7,
  'H': 8, 'Q': 8, 'Z': 8,
  'I': 9, 'R': 9, 'Ñ': 5,
};

// Function to calculate the digital root (single digit sum)
function getDigitalRoot(sum) {
  while (sum > 9) {
    sum = Math.floor(sum / 10) + (sum % 10);
  }
  return sum;
}

// Function to calculate sum of letters and reduce it to a single digit
function getWordSum(word) {
  let sum = 0;
  // Convert word to uppercase to match the mapping
  word = word.toUpperCase();

  for (let letter of word) {
    if (letterMapping[letter]) {
      sum += letterMapping[letter];
    }
  }

  // Reduce sum to a single digit
  return getDigitalRoot(sum);
}

document.getElementById('word-form').addEventListener('submit', function(event) {
  // Prevent the form from submitting and refreshing the page
  event.preventDefault();
  
  // Get the value from the input
  word = document.getElementById('word-input').value;

  // Example usage
  let result = getWordSum(word);
  
  // Display the word or result
  document.getElementById('result').textContent = result;
});

for (let i = 0; i < conciliacionCenters.length; i++) {
  console.log(conciliacionCenters[i], getWordSum(conciliacionCenters[i]));
}
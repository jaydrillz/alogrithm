// Define the input sentence (replace this with your sentence)
const sentence = "This is a sample sentence.";

// Initialize counters
let sentenceLength = 0;
let wordCount = 0;
let vowelCount = 0;

// Iterate through each character in the sentence
for (let i = 0; i < sentence.length; i++) {
  // Increment the sentence length counter
  sentenceLength++;

  // Check if the current character is a space or a period (end of a word)
  if (sentence[i] === ' ' || sentence[i] === '.') {
    wordCount++;
  }

  // Check if the current character is a vowel (case insensitive)
  if (
    'aeiouAEIOU'.includes(sentence[i]) &&
    sentence[i] !== ' ' &&
    sentence[i] !== '.'
  ) {
    vowelCount++;
  }
}

// Output the results
console.log(`Length of the sentence: ${sentenceLength}`);
console.log(`Number of words in the sentence: ${wordCount}`);
console.log(`Number of vowels in the sentence: ${vowelCount}`);

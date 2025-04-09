let story =
  'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(" ");
let count = 0;
let badWord = "freaking";
let misspelledWord = "beautifull";
let unnecessaryWord = "literally";

// 1. Remove unnecessary word ("literally")
storyWords = storyWords.filter((word) => word !== unnecessaryWord);

// 2. Replace misspelled word ("beautifull" with "beautiful")
storyWords = storyWords.map((word) => {
  if (word === misspelledWord) {
    return "beautiful";
  } else {
    return word;
  }
});

// 3. Count words in the story
storyWords.forEach(() => {
  count++;
});
console.log("Word count:", count);

// 4. Find and replace the bad word ("freaking" with "really")
let badWordIndex = storyWords.findIndex((word) => word === badWord);
if (badWordIndex !== -1) {
  storyWords[badWordIndex] = "really";
}

// 5. Ensure all words are 10 characters or less
let lengthCheck = storyWords.every((word) => word.length <= 10);
console.log("Are all words 10 characters or less?", lengthCheck);

if (!lengthCheck) {
  let longWord = storyWords.find((word) => word.length > 10);
  console.log("Long word found:", longWord);
  // Replace the long word with a shorter word
  storyWords = storyWords.map((word) => {
    return word === longWord ? "stunning" : word;
  });
}

// 6. Join the modified story back into a string
console.log(storyWords.join(" "));

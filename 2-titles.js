// Problem #2
// Create an array that contains only the `title` property of each item.

// You should use .map to:
// 1. Update the array 'itemsTitles' with Array.map to only return the `title` of each item.
const itemsTitles = data.map(function(x){
  return x.title
});

const itemsTitiles = data.map((data) => {
      return itemTitles.title;

})
// itemsTitles.push(addingTitles);

console.log(itemsTitles)

// Resources:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// Do not touch:
const itemsTitlesHtml = itemsTitles.map(function(item, index) {
  return '<div>' + [index + 1] + '. ' + item + '</div>'
}).join('')

document.getElementById('answer-2').innerHTML = itemsTitlesHtml

/**
 * hoop.js
 *
 * @link        https://github.com/pemre/hoop-js/
 * @author      Emre Piskin (http://rencs.com/)
 * @description Generates a random sentence and writes it to the innerHTML of an element
 * @param       groups
 * @param       selector
 * @returns     {string}
 */
function hoop (groups, selector) {
  // Get the optional parameter
  selector = selector || false
  // A temp array to store the selected random words
  const sentence = []
  // Push random words to the sentence
  Array.prototype.forEach.call(groups, function (group) {
    sentence.push(group[Math.floor(Math.random() * group.length)])
  })
  // Fill the selector if set, return string otherwise
  if (selector)
    document.getElementById(selector).innerHTML = sentence.join(' ')
  else
    return sentence.join(' ')
}

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

const groups = [
  [
    'Eyvallah',
    'Ooo eyvallah',
    'Sağolasın',
    'Sağol var ol'
  ], [
    'n\'olsun',
    'n\'olsun be,',
    'n\'olsun ben de',
    'n\'olsun işte',
    'ne olsun',
    'ne olsun be',
    'ne olsun ben de',
    'ne olsun işte',
    'işte ben de',
    'ben de',
    'ben de işte'
  ], [
    'aynen',
    'aynı şekilde',
    'aynı durumlarda',
    'bildiğin gibi',
    'durumlar aynı,',
    'durmadan',
    'durmaksızın',
    'eskisi gibi',
    'her gün',
    'her zamanki gibi',
    'her zaman olduğu gibi',
    'klasik',
    'mütemadiyen'
  ], [
    'iş güç',
    'iş güç ev',
    'iş, ev',
    'iştir evdir',
    'ev iş, iş ev',
    'evden işe, işten eve'
  ], [
    'bindim bi\' alamete gidiyorum.',
    'debeleniyorum.',
    'debelenip duruyorum.',
    'devam.',
    'devam ediyorum.',
    'koşturuyorum.',
    'kuşuşturuyorum.',
    'koşturup durmaca.',
    'koşturup duruyorum.',
    'koşturmaca içindeyim.',
    'sürüklenip gidiyorum.',
    'uğraşıyorum.',
    'uğraşıp duruyorum.',
    'uğraşıp durmaca.',
    'yuvarlanıyorum.',
    'yuvarlanıp durmaca.',
    'yuvarlanıp gidiyorum.'
  ], [
    'Sende',
    'Senin orada',
    'Senin oralarda',
    'O tarafta',
    'Orada',
    'Oralarda'
  ], [
    'bi\' sıkıntı yoktur umarım.',
    'durumlar nasıl?',
    'havalar nasıl?',
    'her şey iyi mi?',
    'her şey yolunda mı?',
    'ne var ne yok?',
    'son durum ne?',
    'vaziyet ne?',
    'vaziyetler ne?'
  ]
]

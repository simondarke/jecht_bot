/**
 * @returns {[string, string]|[string, string]|[string, string]|[string, string]|[string, string]}
 */

const presenceArr = [
  ['PLAYING', 'Blitzball'],
  ['LISTENING', 'Real Emotion 🎶'],
  ['WATCHING', 'Auron'],
  ['LISTENING', 'Tidus Laughing 24/7'],
  ['WATCHING', 'Dream Zanarkand'],
];

exports.presenceSetter = () => presenceArr[Math.floor(Math.random() * presenceArr.length)];

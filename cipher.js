
const strToEncrypt = 'A house divided against itself cannot stand. '
const getRules = (letters, move) => {
   return letters.reduce((charsRule, currentChar, charPos) => {
      const copy = { ...charsRule };
      let ind = (charPos + move) % letters.length;
      if (ind < 0) {
         ind += letters.length;
      };
      copy[currentChar] = letters[ind];
      return copy;
   }, {});
};
const encrypted = (strToEncrypt, move = 0) => {
   const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
   const map = getRules(letters, move);
   return strToEncrypt
   .toUpperCase()
   .split('')
   .map(char => map[char] || char)
   .join('');
};

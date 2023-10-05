import {encoded, translations} from './data.js'



function decodeFields(encoded, translations) {
    const decodedList = [];
    const uniqueIds = new Set();

    for (const item of encoded) {
      const decodedItem = {};
  
      for (const [key, value] of Object.entries(item)) {
        if (key.endsWith("Id") && translations[value]) {
          uniqueIds.add(value);
          decodedItem[key] = translations[value];
        } else {
            decodedItem[key] = value;
        }
      }
  
      decodedList.push(decodedItem);
    }
  
    return [decodedList, Array.from(uniqueIds)];
  }

const [decoded, uniqueIds] = decodeFields(encoded, translations);

console.log("Let's rock");
console.log(encoded, translations);

console.log(decoded);
console.log(uniqueIds);

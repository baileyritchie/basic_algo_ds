export function hash(key,bucketsNumber) {
  let hashcode = 0;

  for (let charIdx = 0; charIdx <key.length; charIdx++ ) {
    hashcode += key.charCodeAt(charIdx);
  }
  return hashcode % bucketsNumber;
}
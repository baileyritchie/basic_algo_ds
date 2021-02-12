const {LinkedList} =  require('../linked_lists/linked_lists');

const defaultBucketsNumber = 32;

class HashTable {
  constructor(bucketsNumber =defaultBucketsNumber) {
    this.buckets = Array(bucketsNumber).fill(null).map(() => new LinkedList());
    // an array of linkedlists
  }
  hash(key) {
    let hashCode = 0;

    // Let's go through all key characters and add their code to hash
    for (let characterIndex = 0; characterIndex < key.length; characterIndex += 1) {
      hashCode += key.charCodeAt(characterIndex);
    }

    // Reduce hash number so it would fit buckets table size.
    return hashCode % this.buckets.length;
  }
  set(key,value) {
    const keyHash = this.hash(key);
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key});

    if (!node) {
      bucketLinkedList.append({key,value});
    } else {
      node.value.value = value;
    }
  }
  get(key) {
    const keyHash = this.hash(key);
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key});
    return node ? node.value.value : undefined;
  }
  delete(key) {
    const keyHash = this.hash(key);
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key});

    if (node) {
      bucketLinkedList.delete(node.value);
      return true; // delete successful
    } 
    return false;  
  }
}

module.exports = HashTable;
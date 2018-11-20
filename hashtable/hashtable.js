'use strict';

class HashMap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  GetHash(key) {
    return key.split('').reduce((p, n) => p + n.charCodeAt(0), 0) % this.size;
  }

  add(key, value) {
    let GetHash = this.GetHash(key);
    console.log(GetHash, key, value);

    if (!this.map[GetHash]) {
      this.map[GetHash] = [];
    }

    this.map[GetHash].push({ [key]: value });
    // this.map[GetHash].push(key);
  }

  contains(key) {
    let GetHash = this.GetHash(key);
    if (this.map[GetHash]) {
      return this.map[GetHash].find(item => item[key]);
    } else {
      return 'does not exist';
    }
  }

  find(key) {
    let GetHash = this.GetHash(key);
    return this.map[GetHash].find(item => item[key])[key];
  }
}

// implement your hashTable data structure

var HashTable = function() {
  this._storage = [];
  this._count = 0;
  this._limit = 8;
}


HashTable.prototype.insert = function(key, value) {
  this._storage[this.hashFunc(key, this._limit)].set (key,value)
};


HashTable.prototype.remove = function(key) {
  var tempValue= this.retrieve(key)
  this._storage[this.hashFunc(key, this._limit)].delete (key)
  return tempValue
};
//};



HashTable.prototype.retrieve = function(key) {
  return this._storage[this.hashFunc(key, this._limit)].get (key)
};


HashTable.prototype.hashFunc = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};


HashTable.prototype.resize = function(newLimit) {
  this._Limit= newLimit;
};


HashTable.prototype.retrieveAll = function() {
  return this._storage;
};

var hashTB= new HashTable();
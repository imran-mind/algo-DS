class HashTable{
    constructor(size){
      this.data = new Array(size);
    }
  
    _hash(key){
      let hash = 0;
      for(let i = 0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      }
      return hash;
    }
  
    set(key, value){
      const address = this._hash(key);
      const bucket = [key, value];
      if(!this.data[address]){
        this.data[address] = []
      }
      this.data[address].push( bucket);
      return this.data;
    }
    
    get(key){
      const hashKey = this._hash(key);
      const bucket = this.data[hashKey];
      if(bucket){
          for(let i = 0; i < bucket.length; i++){
            if(bucket[i][0] === key){
              return bucket[i][1];
            }
          }
      }
      return undefined;
    }
  
    keys(){
      const keys = [];
      for(let i = 0; i < this.data.length; i ++){
        if(this.data[i]){
          keys.push(this.data[i][0][0]);
        }
      }
      return keys;
    }
  
    values(){
      const values = [];
      for(let i = 0; i < this.data.length; i++){
        if(this.data[i]){
          values.push(this.data[i][0][1])
        }
      }
      return values;
    }
  }
  
  const a = new HashTable(5);
  // a.set('graps', 200)
  // a.set('apple', 300);
  a.set('papaya', 400);
  a.set('guva', 1000);
  a.set('mango', 18000);
  a.keys();
  a.values()
  // console.log(a)
  // a.set('name', 'imran');
  // a.set('age', 26);
  // console.log(a)
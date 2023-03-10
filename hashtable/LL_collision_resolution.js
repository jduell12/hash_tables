class HashTableEntry{
    constructor(key, value){
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

// Hash table can't have fewer than this many slots
const MIN_CAPACITY = 8

class HashTable {
    /**
     * A hash table that with `capacity` buckets that accepts string keys
     */
    
    constructor(capacity){
        //your code here
    }
    
    /**
     * Return the length of the list you're using to hold the hash able data. (Not the number of items stored in the hash table, but the number of slots in the main list.) One of the tests relies on this.
     */
    get_num_slots(){
        return this.capacity
    }
    
    /**
     * Return the load factor for this hash table.
     */
    get_load_factor(){
        //your code here
    }
    
    /**
     * FNV-1 Hash, 64-bit
     */
    fnv1(key){
        //your code here
    }
    
    /**
     * DJB2 Hash, 32-bit
     */
    djb2(key){
        //your code here
    }
    
    /**
     * Take an arbitrary key and return a valid integer index between within the storage capacity of the hash table.
     */
    hash_index(key){
        //return this.fnv1(key) % this.capacity
        return this.djb2(key) % this.capacity
    }
    
    /**
     * 
     *   Store the value with the given key.
     * Hash collisions should be handled with Linked List Chaining.
     */
    put(key, value){
        //your code here
    }
    
    /**
     * 
     * Remove the value stored with the given key
     * Print a warning if the key is not found.
     */
    delete(key){
        //your code here
    }
    
    /**
     * 
     *  Retrieve the value stored with the given key.
     *  Returns null if the key is not found.
     */
    get(key){
        //your code here
    }
    
    /**
     * 
     * Changes the capacity of the hash table and rehashes all key/value pairs
     */
    resize(new_capacity){
        //your code here
    }
}

module.exports = {HashTable}

// let ht = new HashTable(8)
// ht.put("line_1", "'Twas brillig, and the slithy toves")
// ht.put("line_2", "Did gyre and gimble in the wabe:")
// ht.put("line_3", "All mimsy were the borogoves,")
// ht.put("line_4", "And the mome raths outgrabe.")
// ht.put("line_5", '"Beware the Jabberwock, my son!')
// ht.put("line_6", "The jaws that bite, the claws that catch!")
// ht.put("line_7", "Beware the Jubjub bird, and shun")
// ht.put("line_8", 'The frumious Bandersnatch!"')
// ht.put("line_9", "He took his vorpal sword in hand;")
// ht.put("line_10", "Long time the manxome foe he sought--")
// ht.put("line_11", "So rested he by the Tumtum tree")
// ht.put("line_12", "And stood awhile in thought.")

// console.log('')

// //Test storing beyond capacity
// for(let i = 0; i < 13; i++){
//     console.log(ht.get(`line_${i}`))
// }

// //Test resizing 
// let old_cap = ht.get_num_slots();
// ht.resize(ht.capacity * 2);
// let new_cap = ht.get_num_slots();

// console.log(`Resized from ${old_cap} to ${new_cap}`)

// //Test if data intact after resizing
// for(let i = 0; i < 13; i++){
//     console.log(ht.get(`line_${i}`))
// }

// console.log('')


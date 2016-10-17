//Generates a newId which can be used to "fake" new unique ID's in for instance react keys. 
//Should NOT be treated as unique IDs. 
//lastId can be used to set a minimum ID. 

let lastId = 0;

export default function generateId(lastId = 0) {
    return lastId + (++lastId);
}
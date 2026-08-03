// Inventory Object Manager
// Function Name Must be: manageInventoryObject
// একটি Warehouse System Object-ভিত্তিক Product Stock Manage করে। Action Parameter অনুযায়ী keys/values/entries বের করে, Property Delete করে, অথবা Object Seal/Freeze করে।
// Input
// manageInventoryObject(obj, action) — action হতে পারে: "keys" | "values" | "entries" | "delete:<propName>" | "seal" | "freeze"
// নিয়ম (Rules)
// "keys" → Object.keys(obj) Return করবে
// "values" → Object.values(obj) Return করবে
// "entries" → Object.entries(obj) Return করবে
// "delete:propName" → propName Delete করে নতুন Object Return করবে
// "seal" → Object.seal(obj) করে Return করবে (নতুন Property Add করা যাবে না)
// "freeze" → Object.freeze(obj) করে Return করবে (কোনো Value পরিবর্তন করা যাবে না)
// Validation
// Return "Invalid" যদি obj Plain Object না হয় অথবা action এই List-এ না থাকে।

const manageInventoryObject = (obj, action) => {
    if(obj === null || typeof obj !== 'object' || Array.isArray(obj))
        return 'Invalid';

    if(action === 'keys')
        return Object.keys(obj);
    else if(action === 'values')
        return Object.values(obj);
    else if(action === 'entries')
        return Object.entries(obj);
    else if(action === 'seal')
        return Object.seal(obj);
    else if(action === 'freeze')
        return Object.freeze(obj);
    else if(action.startsWith("delete:")) {
        let propName = action.split(':')[1];
        // let propArr = action.split(":");
        // let propName = propArr[1];

        let newObj = {...obj};
        delete newObj[propName];
        return newObj;
    }
    else 
        return 'Invalid';
}

console.log(manageInventoryObject({a:1,b:2,c:3}, "keys"));
console.log(manageInventoryObject({a:1,b:2,c:3}, "entries"));
console.log(manageInventoryObject({a:1,b:2,c:3}, "delete:c"));
console.log(manageInventoryObject({a:1}, "shrink"));

// output
// [ 'a', 'b', 'c' ]
// [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
// { a: 1, b: 2 }
// Invalid
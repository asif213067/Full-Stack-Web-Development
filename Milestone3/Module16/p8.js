// Object Looper
// Function Name Must be: printObjectDetails
// একটি Product Catalog System একই Object তিন ভাবে Loop করে দেখাতে চায় — for…in, for…of + Object.entries, এবং Object.entries + Array Destructuring।
// Input
// printObjectDetails(obj, loopType) — loopType: "forin" | "forofentries" | "entriesDestructure"
// নিয়ম (Rules)
// "forin" → for...in দিয়ে প্রতি Key Loop করে "<key>: <value>" Array Return করবে
// "forofentries" → for...of (Object.entries(obj)) দিয়ে একই Format Return করবে
// "entriesDestructure" → Object.entries(obj).map এ [key, value] Destructure করে একই Format Return করবে
// Validation
// Return "Invalid" যদি loopType অচেনা হয়।

const printObjectDetails = (obj, loopType) => {
    
    if(loopType === 'forin') {
        let arr = [];
        for(let key in obj) {
            arr.push(`${key}: ${obj[key]}`);
        }
        return arr;
    }
    else if(loopType === 'forofentries') {
        // let arr= [];
        // for(let item of Object.entries(obj)) {
        //     arr.push(`${item[0]}: ${item[1]}`);
        // }
        // return arr;

        let arr= [];
        for(let [key, value] of Object.entries(obj)) {
            arr.push(`${key}: ${value}`);
        }
        return arr;
    }
    else if(loopType === 'entriesDestructure') {
        // let arr = (Object.entries(obj)).map(([key, value]) => {

        //     return (`${key}: ${value}`);
        // })
        // return arr;

        return Object.entries(obj).map(
            ([key,value]) => `${key}: ${value}`
        );
    }
    else 
        return 'Invalid';
}

console.log(printObjectDetails({fruit:"Mango",price:50}, "forin"));
console.log(printObjectDetails({fruit:"Mango",price:50}, "forofentries"));
console.log(printObjectDetails({fruit:"Mango",price:50}, "entriesDestructure"));
console.log(printObjectDetails({}, "loopThrough"));


// Output
// [ 'fruit: Mango', 'price: 50' ]
// [ 'fruit: Mango', 'price: 50' ]
// [ 'fruit: Mango', 'price: 50' ]
// Invalid
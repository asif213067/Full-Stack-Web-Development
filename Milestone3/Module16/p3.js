// Receipt Generator
// Function Name Must be: generateReceipt
// একটি Grocery Shop-এর POS System প্রতিটি Purchase-এর পর একটি Multi-line Receipt প্রিন্ট করে। Template Literal ব্যবহার করে এই Receipt তৈরি করতে হবে।
// Input
// Function তিনটি Parameter গ্রহণ করবে — customerName (String), items (Array of String), total (Number)
// Output / নিয়ম
// Template Literal (backtick) ব্যবহার করে Multi-line String Return করতে হবে
// Format exactly:Receipt for <customerName>Items: <item1, item2, ...>Total: ৳<total>
// Validation
// Return "Invalid" যদি items Array না হয় অথবা Empty হয়।

const generateReceipt = (customerName, items, total) => {
  if (!Array.isArray(items) || items.length === 0) return "Invalid";

  let result = `Receipt for ${customerName} ${"\n"}Items: ${items} ${"\n"}Total: ${total}`

  return result;

//   return `Receipt for ${customerName}
//     Items: ${items}
//     Total: ${total}`;
};

console.log(generateReceipt("Rakib", ["Pen", "Book"], 150));
console.log(generateReceipt("Sadia", ["Milk"], 60));
console.log(generateReceipt("Tanvir", [], 0));

// output
// Receipt for Rakib 
// Items: Pen,Book 
// Total: 150
// Receipt for Sadia 
// Items: Milk 
// Total: 60
// Invalid
// Scope Detective
// Function Name Must be: describeDeclaration
// একটি কোডিং একাডেমি নতুন শিক্ষার্থীদের var, let, const এর পার্থক্য বোঝাতে একটি ছোট Quiz Tool বানাচ্ছে। Tool-টি একটি keyword ইনপুট নেবে এবং সেই keyword দিয়ে Redeclare ও Reassign করা যায় কিনা তা বর্ণনা করবে।
// Input
// Function একটি Parameter গ্রহণ করবে — keyword (String): "var" / "let" / "const"
// নিয়ম (Rules)
// "var" হলে Return করবে "Can redeclare, can reassign"
// "let" হলে Return করবে "Cannot redeclare, can reassign"
// "const" হলে Return করবে "Cannot redeclare, cannot reassign"
// Validation
// Return "Invalid" যদি keyword এই তিনটির একটিও না হয়।

const describeDeclaration = (keyword) => {
    if(keyword === 'var') return "Can redeclare, can reassign";
    else if(keyword === 'let') return "Cannot redeclare, can reassign";
    else if(keyword === 'const') return "Cannot redeclare, cannot reassign";
    else return 'Invalid';
}

console.log(describeDeclaration('let'));
console.log(describeDeclaration('const'));
console.log(describeDeclaration('var'));
console.log(describeDeclaration('int'));


// Output
// Cannot redeclare, can reassign
// Cannot redeclare, cannot reassign
// Can redeclare, can reassign
// Invalid
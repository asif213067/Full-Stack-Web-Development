"use strict";
//API response
Object.defineProperty(exports, "__esModule", { value: true });
const transactionResponse = {
    data: "Transaction successful",
    status: 200,
};
const transactionStatus = {
    data: true,
    status: 200,
};
const transactionAmount = {
    data: 100000,
    status: 200,
};
// reuseable function
function getValue(value) {
    return value;
}
const result = getValue('Hello');
const result2 = getValue(24);
const result3 = getValue(false);
//generics with array
function firstValue(items) {
    return items[0];
}
const firstItem = firstValue([10, 20, 30]);
//# sourceMappingURL=generice.js.map
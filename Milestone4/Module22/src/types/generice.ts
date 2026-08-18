//API response

interface Response<T> {
  data: T;
  status: number;
}

const transactionResponse: Response<string> = {
  data: "Transaction successful",
  status: 200,
};

const transactionStatus: Response<boolean> = {
  data: true,
  status: 200,
};

const transactionAmount: Response<number> = {
  data: 100000,
  status: 200,
};


// reuseable function

function getValue<T> (value: T) : T {
    return value;
}

const result = getValue<string> ('Hello');
const result2 = getValue<number> (24);
const result3 = getValue (false);


//generics with array

function firstValue<T> (items: T[]): T | undefined {
    return items[0];
}

const firstItem = firstValue([10, 20, 30]);
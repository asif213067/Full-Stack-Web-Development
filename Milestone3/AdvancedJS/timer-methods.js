// setTimeout() & clearTimeout()

const timeId = setTimeout(()=> {
    console.log("after 5 second Hi");
}, 5000);

// clearTimeout(timeId);    // to clear a timeout

console.log('Hello');



// setInterval() & clearInterval()

let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(`interval count: ${count}`);

    if(count === 5) 
        clearInterval(intervalId);
}, 1000)



// setInterval with local time
const localeTime = setInterval(() => {
    let data = new Date();
    let time = data.toLocaleTimeString();
    console.log(time);
}, 1000)
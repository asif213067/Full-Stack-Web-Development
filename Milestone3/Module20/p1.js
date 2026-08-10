//Problem-01: Student Introduction Generator
function studentIntroduction(student) {
    if(typeof student !== 'object'|| student.name === undefined || student.age === undefined || student.course === undefined) return "Invalid";
    

    return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`
}

console.log(studentIntroduction({"name":"Rafi", age: '24',"course":"JavaScript"}));
console.log(studentIntroduction({"name":"Rafi","age":18}));
console.log(studentIntroduction({}));


//Problem-02: Active User Filter
function filterActiveUsers(users) {
    if(!Array.isArray(users) || users.length === 0)
        return "Invalid";

    if(users.some((user) => user.isActive === undefined))
        return "Invalid";

    return users.filter((user) => user.isActive === true)
}


//Problem-03: Trending Hashtag Counter
function countHashtags(caption) {
    if(typeof caption !== 'string')
        return "Invalid";

    let hashtagCount = 0;
    let longestTag = "";

    let str = caption.split(" ");
    for(let s of str) {
        if(s.startsWith("#")){
            hashtagCount++;
            if((s.length - 1) > longestTag.length){
                longestTag = s.slice(1);
            }
        }
        
    }

    return {hashtagCount: hashtagCount, longestTag: longestTag};
}

//Problem-04: Bonus Score Calculator
function bonusScore(scores) {
    if(!Array.isArray(scores) || scores.length === 0)
        return "Invalid";

    if(scores.some((score) => typeof score !== 'number'))
        return "Invalid";

    let updatedScores = scores.map((score) => score + 10);
    
    return updatedScores.reduce((prev, curr) => prev + curr, 0);
}

//Problem-05: Debugging Challenge - AI Leaderboard Generator
/* Find and fix every bug. Do not change the function name. */
function generateLeaderboard(students) {
    if (!Array.isArray(students)) {
        return "Invalid";
    }

    if (students.length === 0) {
        return "Invalid";
    }

    if(students.some((student) => student.name === undefined || typeof student.score !== 'number'))
        return "Invalid";

    const qualified = students.filter(student => {
        return student.score >= 70;
    });

    const names = qualified.map(({ name }) => {
        return name.toUpperCase();
    });

    return names.slice(0, 3);
}



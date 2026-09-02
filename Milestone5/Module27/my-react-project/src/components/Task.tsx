// with if-else

// export default function Task({task, isDone}: {task:string, isDone:boolean}) {
//     if(isDone === true) 
//         return <h3>Completed: {task}</h3>
//     return <h3>Panding: {task}</h3>
// }


// with ternary operator

export default function Task({task, isDone}: {task:string, isDone:boolean}) {
    return isDone ? <h3>Completed: {task}</h3> : <h3>Panding: {task}</h3>
}

// with AND operator

// export default function Task({task, isDone}: {task:string, isDone:boolean}) {
//     return isDone && <h3>Completed: {task}</h3>
// }
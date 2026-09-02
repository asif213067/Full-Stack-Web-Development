interface TodoPropType {
  task: string;
  time?: string;
}

function Todo({task, time}: TodoPropType) {
  return (
    <>
      <li>Task: {task} at {time}</li>
    </>
  );
}

// function Todo(props: TodoPropType) {
//   return (
//     <>
//       <li>Task: {props.task} at {props.time}</li>
//     </>
//   );
// }

export default Todo;

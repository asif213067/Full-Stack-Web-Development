import { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
  }, []);

  return <div>Todos: {todos.length}</div>;
};

export default Todos;

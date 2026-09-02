import "./App.css";
import Task from "./components/Task";
import Todo from "./components/Todo";
import Book from "./components/Book";
import User from "./components/User";

function App() {
  const styling = {
    borderRadius: "10px",
    border: "1px solid green",
    margin: "20px",
    padding: "20px",
  };

  const books = ["Physics", "Chemistry", "Math", "Biology", "English"];

  return (
    <>
      <h1>Hello World</h1>
      <UserInfo />
      <Student name="Raima" age="35" />
      <Student name="Maira" age="15" />
      <Student name="Taira" age="5" />
      <Teacher />
      <div style={styling}>
        <Todo task="Learn React" time="6 am" />
        <Todo task="Learn English" time="10 am" />
      </div>
      <div style={styling}>
        <Task task="Learn React" isDone={true} />
        <Task task="Wasting time on scoial meadia" isDone={false} />
      </div>
       
      // book list
      <div style={styling}>
        {books.map((book) => (
          <Book name={book} />
        ))}
      </div>

      <div style={styling}>
        <User />
      </div>
    </>
  );
}

function UserInfo() {
  const isStudent = "True";

  const userStyle = {
    borderRadius: "10px",
    border: "1px solid green",
    margin: "20px",
    padding: "20px",
  };

  return (
    <>
      <div style={userStyle}>
        <h2>My name is Asif Khan.</h2>
        <h3>Age: 24</h3>
        <h3>Home: Pabna</h3>
        <h3>Student: {isStudent}</h3>
      </div>
    </>
  );
}

function Student(props: any) {
  return (
    <>
      <div className="student">
        <h2>Student Info</h2>
        <h3>Name: {props.name}</h3>
        <h3>Age: {props.age}</h3>
        <h3>Bari: Pabna</h3>
      </div>
    </>
  );
}

function Teacher() {
  return (
    <>
      <div
        style={{
          borderRadius: "10px",
          border: "1px solid green",
          margin: "20px",
          padding: "20px",
        }}
      >
        <h2>Teacher Info</h2>
        <h3>Name: Mota Don Begum</h3>
        <h3>Age: 105</h3>
        <h3>Bari: Pabna</h3>
      </div>
    </>
  );
}

export default App;

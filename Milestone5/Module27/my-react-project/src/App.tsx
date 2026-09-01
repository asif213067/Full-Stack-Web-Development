import './App.css'

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <UserInfo />
    </>
  )
}

function UserInfo() {
  const isStudent = 'True';

  return (
    <>
      <h1>My name is Asif Khan.</h1>
      <h2>Age: 24</h2>
      <h2>Home: Pabna</h2>
      <h2>Student: {isStudent}</h2>
    </>
  )
}

export default App

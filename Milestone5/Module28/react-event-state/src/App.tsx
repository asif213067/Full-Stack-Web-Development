import "./App.css";
import { Suspense } from "react";
import Count from "./components/Count";
import User from "./components/User";
import Todos from "./components/Todos";

function App() {
  const handleClick = () => {
    alert("The button is clicked!");
  };

  const handleCart = (id: number) => {
    alert("Added to the cart " + id);
  };

  const styleButton = {
    backgroundColor: "green",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "20px",
  };

  const styleBox = {
    borderRadius: "10px",
    border: "2px solid yellow",
    padding: "20px",
    margin: "20px",
  };

  const usersDataPromise = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
    const data = await res.json();
    return data;
  }

  return (
    <>
      <div style={styleBox}>
        <button style={styleButton} onClick={handleClick}>
          Click Here
        </button>
        <button style={styleButton} onClick={() => handleCart(101)}>
          Add to Cart
        </button>
      </div>

      <div style={styleBox}>
        <Count styleBtn={styleButton} />
      </div>

      <Suspense>
        <div style={styleBox}>
          <User usersDataPromise={usersDataPromise()} />
        </div>
      </Suspense>

      <Suspense>
        <div style={styleBox}>
          <Todos />
        </div>
      </Suspense>
    </>
  );
}

export default App;

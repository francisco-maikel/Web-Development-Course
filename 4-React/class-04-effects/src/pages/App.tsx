import { useEffect, useState } from "react";
import { UserCard } from "../components/UserCard";

export function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [dataUser, setDataUser] = useState ({});

  useEffect(() => {
    console.log(`Effect ${count}`); // componentDidMount
     setCount2((value) => value + 1) // derived states

    return () => console.log("Closed");
  }, [count]); // componentDidUpdate

  console.log("Render"); // componentWillMount

  //useEffect(() => {
  fetch("linkedin.com/in/franciscomaikel/")
 }, []);
  return (
    <>
      <h1>Class 04 Effects</h1>
      <p>Count: {count}</p>
      <p>Count2: {count2}</p>
      <button onClick={() => setCount((value) => value + 1)}>Add</button>
    
     <UserCard data={dataUser}/>
    </>
  );
  }

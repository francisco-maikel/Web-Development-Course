import { useContext } from "react";
import { IncrementContext } from "../contexts/IncrementContext";

export function Button() {
  const { incrementCount } = useContext(IncrementContext);
  return (
    <>
      <button onClick={incrementCount}>Increment</button>
    </>
  );
}

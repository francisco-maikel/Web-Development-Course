import { useContext } from "react";
import { IncrementContext } from "../contexts/IncrementContext";

export function Card() {
  const { count } = useContext(IncrementContext);

  return (
    <>
      <h1>Card {count}</h1>
    </>
  );
}

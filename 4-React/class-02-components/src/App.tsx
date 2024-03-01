import { ButtonApp } from "./components/ButtonApp";
import { UserCard } from "./components/ButtonApp/UserCard";

export function App() {
  return (
    <>
    <h1>Class 02 Components</h1>
    <ButtonApp name="Play" />
    <ButtonApp name="Stop" />
    <ButtonApp name="<<" />
    <ButtonApp name=">>" />

   <UserCard name="Maikel" role="Web Developer" color="lightblue"/> 
   <UserCard name="Gomes" role="Web Developer" color="lightgreen"/> 
    </>
  );
}
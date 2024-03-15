import { UserCard } from "../components/UserCard";
import { useQueryCep } from "../hooks/useQueryCep";

type User = {
  id: number;
  name: string;
  phone: string;
};

export function App() {
  const { data, isLoading, error } = useQueryCep();
  console.log(data);

  if (error) console.error(error);

  return (
    <>
      <h1>App</h1>
      {isLoading && <div>Loading...</div>}
      {isLoading && error && <div>Error...</div>}
      {data?.map((user: User) => {
        return <UserCard key={user.id} name={user.name} phone={user.phone} />;
      })}
    </>
  );
}

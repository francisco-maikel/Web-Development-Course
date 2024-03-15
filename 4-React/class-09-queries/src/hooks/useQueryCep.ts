import { useQuery } from "@tanstack/react-query";

async function getCep() {
    // const data = await fetch(`https://cdn.apicep.com/file/apicep/63580-000}.json`)
    // const data = await fetch(`https://api.github.com/users/EmanuelQuintino`);
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    return data.json();
}

export function useQueryCep() {
    const query = useQuery({
        queryKey: ["cep"],
        queryFn: () => getCep()
    });

    return query;
}
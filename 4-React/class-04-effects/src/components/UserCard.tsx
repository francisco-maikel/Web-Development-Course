type Props = {
    avatar_url: string;
    name: string
    bio: string
}

type Props = {
    data: Data;
}

export function UserCard({ data }) {
    return (
        <div style={{ textAlign: "center"}}>
        <img src={data.avatar_url} alt="user-image" width={200} />
        <h2>{data.name}</h2>
        <p></p>{data.bio}</p>
        </div>
    ); 
}
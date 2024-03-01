type Props = {
    name: string;
    role: string;
    color?: string;
};

export function UserCard({ name, role, color }: Props) {
    return (
        <div style={{background : color }}>
        <h2>{name}</h2>
        <p>{role}</p>
        </div>
    )
}
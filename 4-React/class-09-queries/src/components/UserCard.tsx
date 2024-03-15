import { ContainerUserCard } from "./style";

type Props = {
    name: string;
    phone: string
};

export function UserCard ({name, phone}: Props) {
    return (
   <ContainerUserCard>
   <strong>{name}</strong>
   <p>{phone}</p>
   </ContainerUserCard>
  );
};
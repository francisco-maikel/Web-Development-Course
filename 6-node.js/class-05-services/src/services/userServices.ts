import { randomUUID } from "node:crypto";
import { hash } from "bcrypt";

type UserData = {
  name: string;
  age: number;
  password: string;
};

export const userServices = {
  async create(data: UserData) {
    try {
      const { name, age, password } = data;

      const passwordHash = await hash(password, 10);

      const user = {
        id: randomUUID(),
        name: name,
        age: age,
        password: passwordHash,
      };

      console.log(user); // database

      return { id: user.id };
    } catch (error) {
      return console.error(error);
    }
  },
};

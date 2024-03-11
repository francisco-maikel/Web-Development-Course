import { PropsWithChildren, createContext, useState } from "react";

type Context = {
  count: number;
  incrementCount: () => void;
};

export const IncrementContext = createContext({} as Context);

export function IncrementProvider({ children }: PropsWithChildren) {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount((value) => value + 1);
  }

  return (
    <IncrementContext.Provider
      value={{
        count: count,
        incrementCount,
      }}
    >
      {children}
    </IncrementContext.Provider>
  );
}

import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
};

export function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <h1>Class 08 Forms</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <br />
          <section>
            <label>
              Name:
              <input
                type="name"
                {...register("name", {
                  required: "Campo obrigatorio!",
                  minLength: {
                    value: 3,
                    message: "Endereço de email invalido",
                  },
                })}
              />
            </label>

            <div style={{ fontSize: 10, color: "red", position: "absolute" }}>
              {errors.name?.message}
            </div>
          </section>
          <br />

          <section>
            <label>
              email:
              <input
                type="email"
                {...register("email", {
                  required: "Campo obrigatorio!",
                  pattern: {
                    value: /^[a-zA-ZO-9_.+-]+@[a-zA-ZO-9]+\.[a-zA-ZO-9-.]+$/i,
                    message: "Email inválido",
                  },
                })}
              />
            </label>

            <div style={{ fontSize: 10, color: "red", position: "absolute" }}>
              {errors.email?.message}
            </div>
          </section>
        </div>
        <br />
        <br />

        <div>
          <button>Enviar</button>
        </div>
      </form>
    </>
  );
}

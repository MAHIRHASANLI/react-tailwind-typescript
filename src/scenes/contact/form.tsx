import { useForm } from "react-hook-form";

const Form = () => {
  const Classes = `w-full rounded-lg bg-primary-300 py-3 px-5 placeholder-white mb-5`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (event: any) => {
    const isValid = await trigger();
    if (!isValid) {
      event.preventDefault();
    }
  };
  return (
    <form
      onSubmit={onSubmit}
      method="POST"
      action="https://formsubmit.co/ed23c84166dda37a3574806456750341"
    >
      <input
        {...register("name", {
          required: true,
          minLength: 3,
          maxLength: 20,
        })}
        type="text"
        placeholder="NAME"
        className={Classes}
      />
      {errors.name && (
        <p className="mt-1 text-primary-500">
          {errors.name.type === "required" && "Name is required."}
          {errors.name.type === "maxLength" && "Max length is 20 char."}
          {errors.name.type === "maxLength" && "Min length is 3 char."}
        </p>
      )}

      <input
        {...register("email", {
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        })}
        type="email"
        placeholder="EMAIL"
        className={Classes}
      />
      {errors.email && (
        <p className="mt-1 text-primary-500">
          {" "}
          {errors.email.type === "required" && "Email is required."}
          {errors.email.type === "pattern" && "Invalid email address."}
        </p>
      )}

      <textarea
        {...register("message", {
          required: true,
          minLength: 3,
          maxLength: 200,
        })}
        rows={4}
        cols={50}
        placeholder="MESSAGE"
        className={Classes}
      />
      {errors.message && (
        <p className="mt-0 text-primary-500">
          {errors.message.type === "required" && "Nessage is required."}
          {errors.message.type === "maxLength" && "Max length is 200 char."}
          {errors.message.type === "maxLength" && "Min length is 3 char."}
        </p>
      )}

      <button
        type="submit"
        className="mt-5 bg-secondary-500 rounded-md py-3 px-20 transition-all hover:text-white"
      >
        SUBMIT
      </button>
    </form>
  );
};

export default Form;

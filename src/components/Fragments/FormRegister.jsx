import Button from "../Elements/Button";
import InputForm from "../Elements/Input/InputForm";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        type="text"
        placeholder="masukkan nama anda bro"
        name="fullname"
      />
      <InputForm
        label="Email"
        type="email"
        placeholder="jonoganteng@gmail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="****"
        name="password"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="****"
        name="confirmPassword"
      />

      <Button variant="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;

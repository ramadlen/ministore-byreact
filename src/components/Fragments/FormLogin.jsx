import { useRef, useState } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input/InputForm";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  //Materi event Handler
  const handleLogin = (event) => {
    event.preventDefault();
    //untuk materi menyimpan dilocalstorage
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);
    // //redirect
    // window.location.href = "/products";

    //materi dibawah ini untuk post data ke fakestoreapi.com
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
        console.log(res.response.data);
      }
    });
  };
  const usernameRef = useRef(null);

  useRef(() => {
    usernameRef.current.focus();
  }, []);
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Username"
        type="text"
        placeholder="Tarik Sis"
        name="username"
        ref={usernameRef}
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="****"
        name="password"
      />

      <Button variant="bg-blue-600 w-full" type="submit">
        Login
      </Button>
      {loginFailed && (
        <p className="text-red-600 text-center mt-5">{loginFailed}</p>
      )}
    </form>
  );
};

export default FormLogin;

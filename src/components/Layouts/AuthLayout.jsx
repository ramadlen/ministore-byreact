import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  {
    console.log(isDarkMode);
  }
  return (
    <div
      className={`flex justify-center bg-white min-h-screen items-center ${isDarkMode && "bg-slate-900"}`}
    >
      <div className="w-full max-w-xs">
        <button
          className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Light" : "Dark"}
        </button>
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your details
        </p>
        {children}
        <Navigation type={type} />
        {/* cara tenary direekom untuk 2 kondisi */}
        {/* <p className="text-sm mt-5 text-center">
          {type === "login"
            ? "Don't have an account?"
            : "Already have an account?"}
        // cara dan-dan
          {type === "login" && (
            <Link className="font-bold text-blue-600" to="/register">
              Sign Up
            </Link>
          )}
          {type === "register" && (
            <Link className="font-bold text-blue-600" to="/login">
              Login
            </Link>
          )}
        </p> */}
      </div>
    </div>
  );
};

// membuat komponen terpisah dalam satu halaman vscode
const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-sm mt-5 text-center">
        Don't have an account?{" "}
        <Link className="font-bold text-blue-600" to="/register">
          Sign Up
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm mt-5 text-center">
        Already have an account?{" "}
        <Link className="font-bold text-blue-600" to="/login">
          Login
        </Link>
      </p>
    );
  }
};
export default AuthLayout;

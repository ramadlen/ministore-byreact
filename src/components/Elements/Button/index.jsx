// // class components
// class Button extends React.Component {
//   render() {
//     return (
//       <button
//         className="h-10 px-6 font-semibold rounded-md bg-lime-600 text-white"
//         type="submit"
//       >
//         Buy now
//       </button>
//     );
//   }
// }

// //functional components
// function ButtonBlack() {
//   return (
//     <button
//       className="h-10 px-6 font-semibold rounded-md bg-black text-white"
//       type="submit"
//     >
//       Buy now
//     </button>
//   );
// }

//pakai arrow function(sama dengan functional components)

const Button = (props) => {
  /* metode distrucring  variant sama dengan method props*/
  const {
    children,
    variant = "bg-blue-500",
    onClick = () => {},
    type = "button",
  } = props;

  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
      type={type}
      onClick={onClick}
    >
      {/* metode distrucring */}
      {children}
    </button>
  );
};

//untuk di file App
// function App() {
// return (
//   <div className="flex justify-center bg-blue-600 min-h-screen items-center">
//     <div className="flex gap-x-3">
//       <Button variant="bg-red-700">Login</Button>

//       <Button variant="bg-black">Logout</Button>

//       {/* Metode distrucering */}
//       <Button></Button>
//     </div>
//   </div>
// );
//};
export default Button;

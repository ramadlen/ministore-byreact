import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center bg-white min-h-screen items-center flex-col">
      <h1 className="text-3xl font-bold">Opps</h1>
      <p className="my-5">Tuhan Memberkahi Orang Yang Sabar</p>
      <p>{error.statutText || error.message}</p>
    </div>
  );
};

export default ErrorPage;

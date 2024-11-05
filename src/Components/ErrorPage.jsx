import React from "react";

const ErrorPage = () => {
  const errorPic =
    "https://static.vecteezy.com/system/resources/previews/023/555/089/non_2x/404-page-glitch-effect-not-found-error-background-vector.jpg";
  return (
    <div className="max-h-fit screen w-11/12 mx-auto">
      <img src={errorPic} alt="" />
    </div>
  );
};

export default ErrorPage;

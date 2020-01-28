import React from "react";
import Loader from "react-loader-spinner";

const Spinner = () => {
  return (
    <Loader
      type="ThreeDots"
      color="#e6946b"
      height={100}
      width={100}
      timeout={3000}
      className="spinner-container"
    />
  );
};

export default Spinner;

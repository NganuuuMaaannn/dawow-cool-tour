import React from "react";
import PuffLoader from "react-spinners/PuffLoader";

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <PuffLoader color="#5c2928" size={100} speedMultiplier={1} />
    </div>
  );
};

export default Loader;
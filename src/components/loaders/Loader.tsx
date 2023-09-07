import React from "react";
import { BallTriangle } from "react-loader-spinner";

function Loader() {
  return (
    <div className="h-[50vh] w-full flex justify-center items-center">
      <BallTriangle height={100} width={100} radius={5} color="#CCB3AE" ariaLabel="ball-triangle-loading" wrapperClass={undefined} visible={true} />
    </div>
  );
}

export default Loader;

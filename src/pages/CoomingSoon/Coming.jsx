import React, { useEffect } from "react";

function Coming() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts.
  }, []);
  return (
    <div className="coming__soon mb-[4rem] mt-[4rem]">
      <div className="justify-center w-[70%] mx-auto my-auto h-[60vh] bg-slate-100 flex py-auto">
        <h1 className="text-5xl font-bold text-gray-200 text-center my-auto">
          COMMING SOON
        </h1>
      </div>
    </div>
  );
}

export default Coming;

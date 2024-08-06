import React from "react";

export default function Mission() {
  return (
    <>
      <div className="rounded-box w-auto h-auto py-8 px-12 m-8 overflow-scroll bg-accent flex justify-center items-center lg:bg-base-100 lg:h-96 lg:w-1/2 lg:m-4">
        <div className="flex flex-col">
          <h2 className="text-2xl text-primary m-2 font-medium">Our Mission</h2>
          <p className="text-secondary text-xl font-light">
            To evaluate and optimize early production HPC technology and provide
            breakthrough software solutions to significantly increase the
            breadth and impact of the HPCMP.
          </p>
        </div>
      </div>
    </>
  );
}
